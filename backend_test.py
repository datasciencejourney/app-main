#!/usr/bin/env python3
"""
Backend API Testing Script for Portfolio Application
Tests all backend endpoints and MongoDB connectivity
"""

import requests
import json
import sys
from datetime import datetime
from typing import Dict, Any

# Get backend URL from frontend .env
BACKEND_URL = "https://repo-clone-24.preview.emergentagent.com/api"

class BackendTester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.test_results = []
        self.session = requests.Session()
        
    def log_test(self, test_name: str, success: bool, details: str = "", response_data: Any = None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        if response_data:
            result["response_data"] = response_data
        self.test_results.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}")
        if details:
            print(f"   Details: {details}")
        if response_data and not success:
            print(f"   Response: {response_data}")
        print()

    def test_root_endpoint(self):
        """Test GET /api/ endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/")
            
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_test("GET /api/ - Root endpoint", True, 
                                f"Status: {response.status_code}, Message: {data.get('message')}")
                else:
                    self.log_test("GET /api/ - Root endpoint", False, 
                                f"Unexpected response message: {data}")
            else:
                self.log_test("GET /api/ - Root endpoint", False, 
                            f"Status: {response.status_code}", response.text)
                
        except requests.exceptions.RequestException as e:
            self.log_test("GET /api/ - Root endpoint", False, f"Request failed: {str(e)}")

    def test_create_status_check(self):
        """Test POST /api/status endpoint"""
        test_data = {
            "client_name": "John Smith Portfolio"
        }
        
        try:
            response = self.session.post(
                f"{self.base_url}/status",
                json=test_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["id", "client_name", "timestamp"]
                
                if all(field in data for field in required_fields):
                    if data["client_name"] == test_data["client_name"]:
                        self.log_test("POST /api/status - Create status check", True,
                                    f"Created status check with ID: {data['id']}")
                        return data["id"]  # Return ID for further testing
                    else:
                        self.log_test("POST /api/status - Create status check", False,
                                    f"Client name mismatch: expected {test_data['client_name']}, got {data['client_name']}")
                else:
                    missing_fields = [f for f in required_fields if f not in data]
                    self.log_test("POST /api/status - Create status check", False,
                                f"Missing required fields: {missing_fields}", data)
            else:
                self.log_test("POST /api/status - Create status check", False,
                            f"Status: {response.status_code}", response.text)
                
        except requests.exceptions.RequestException as e:
            self.log_test("POST /api/status - Create status check", False, f"Request failed: {str(e)}")
        except json.JSONDecodeError as e:
            self.log_test("POST /api/status - Create status check", False, f"JSON decode error: {str(e)}")
            
        return None

    def test_get_status_checks(self):
        """Test GET /api/status endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/status")
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list):
                    self.log_test("GET /api/status - Retrieve status checks", True,
                                f"Retrieved {len(data)} status checks")
                    
                    # Validate structure of returned items
                    if data:
                        first_item = data[0]
                        required_fields = ["id", "client_name", "timestamp"]
                        if all(field in first_item for field in required_fields):
                            self.log_test("GET /api/status - Data structure validation", True,
                                        "All required fields present in response")
                        else:
                            missing_fields = [f for f in required_fields if f not in first_item]
                            self.log_test("GET /api/status - Data structure validation", False,
                                        f"Missing fields in response: {missing_fields}")
                    else:
                        self.log_test("GET /api/status - Data structure validation", True,
                                    "Empty list returned (no data to validate)")
                else:
                    self.log_test("GET /api/status - Retrieve status checks", False,
                                f"Expected list, got {type(data)}", data)
            else:
                self.log_test("GET /api/status - Retrieve status checks", False,
                            f"Status: {response.status_code}", response.text)
                
        except requests.exceptions.RequestException as e:
            self.log_test("GET /api/status - Retrieve status checks", False, f"Request failed: {str(e)}")
        except json.JSONDecodeError as e:
            self.log_test("GET /api/status - Retrieve status checks", False, f"JSON decode error: {str(e)}")

    def test_mongodb_connectivity(self):
        """Test MongoDB connectivity by creating and retrieving data"""
        print("Testing MongoDB connectivity through API operations...")
        
        # Create a test status check
        test_data = {
            "client_name": "MongoDB Connectivity Test - Sarah Johnson"
        }
        
        try:
            # Create
            create_response = self.session.post(
                f"{self.base_url}/status",
                json=test_data,
                headers={"Content-Type": "application/json"}
            )
            
            if create_response.status_code != 200:
                self.log_test("MongoDB Connectivity - Create operation", False,
                            f"Failed to create test record: {create_response.status_code}")
                return
            
            created_data = create_response.json()
            test_id = created_data.get("id")
            
            # Retrieve and verify
            get_response = self.session.get(f"{self.base_url}/status")
            
            if get_response.status_code == 200:
                all_status_checks = get_response.json()
                
                # Look for our test record
                found_record = None
                for record in all_status_checks:
                    if record.get("id") == test_id:
                        found_record = record
                        break
                
                if found_record:
                    if found_record["client_name"] == test_data["client_name"]:
                        self.log_test("MongoDB Connectivity - Full CRUD cycle", True,
                                    f"Successfully created and retrieved record with ID: {test_id}")
                    else:
                        self.log_test("MongoDB Connectivity - Data integrity", False,
                                    f"Data mismatch: expected {test_data['client_name']}, got {found_record['client_name']}")
                else:
                    self.log_test("MongoDB Connectivity - Data persistence", False,
                                f"Created record with ID {test_id} not found in retrieval")
            else:
                self.log_test("MongoDB Connectivity - Retrieve operation", False,
                            f"Failed to retrieve records: {get_response.status_code}")
                
        except Exception as e:
            self.log_test("MongoDB Connectivity - Full test", False, f"Exception during test: {str(e)}")

    def test_backend_serving(self):
        """Test that backend is serving correctly on configured URL"""
        print(f"Testing backend serving on: {self.base_url}")
        
        try:
            # Test basic connectivity
            response = self.session.get(f"{self.base_url}/", timeout=10)
            
            if response.status_code == 200:
                self.log_test("Backend Serving - URL accessibility", True,
                            f"Backend accessible at {self.base_url}")
                
                # Test CORS headers with proper request
                cors_response = self.session.get(
                    f"{self.base_url}/",
                    headers={"Origin": "https://example.com"}
                )
                if 'access-control-allow-origin' in cors_response.headers:
                    self.log_test("Backend Serving - CORS configuration", True,
                                f"CORS headers present: {cors_response.headers.get('access-control-allow-origin')}")
                else:
                    self.log_test("Backend Serving - CORS configuration", False,
                                "CORS headers missing")
            else:
                self.log_test("Backend Serving - URL accessibility", False,
                            f"Backend not accessible: {response.status_code}")
                
        except requests.exceptions.Timeout:
            self.log_test("Backend Serving - URL accessibility", False,
                        "Request timeout - backend may not be running")
        except requests.exceptions.ConnectionError:
            self.log_test("Backend Serving - URL accessibility", False,
                        "Connection error - backend may not be accessible")
        except Exception as e:
            self.log_test("Backend Serving - URL accessibility", False, f"Unexpected error: {str(e)}")

    def run_all_tests(self):
        """Run all backend tests"""
        print("=" * 60)
        print("PORTFOLIO BACKEND API TESTING")
        print("=" * 60)
        print(f"Testing backend at: {self.base_url}")
        print()
        
        # Test backend serving first
        self.test_backend_serving()
        
        # Test individual endpoints
        self.test_root_endpoint()
        
        # Test status endpoints
        created_id = self.test_create_status_check()
        self.test_get_status_checks()
        
        # Test MongoDB connectivity
        self.test_mongodb_connectivity()
        
        # Summary
        print("=" * 60)
        print("TEST SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for result in self.test_results if result["success"])
        total = len(self.test_results)
        
        print(f"Total Tests: {total}")
        print(f"Passed: {passed}")
        print(f"Failed: {total - passed}")
        print()
        
        if total - passed > 0:
            print("FAILED TESTS:")
            for result in self.test_results:
                if not result["success"]:
                    print(f"❌ {result['test']}: {result['details']}")
            print()
        
        return passed == total

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    if not success:
        sys.exit(1)
    else:
        print("🎉 All tests passed!")