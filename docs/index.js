var spec = {
    "openapi": "3.0.3",
    "info": {
        "title": "banking server - API",
        "description": "- 개발자 장현호\n- 개발 기간: 2023/02/21 ~ 2023/03/04\n",
        "version": "1.0.0"
    },
    "tags": [
        {
            "name": "user",
            "description": "고객 관리"
        },
        {
            "name": "friend",
            "description": "친구 관리 (로그인 고객에게만 제공)"
        },
        {
            "name": "account",
            "description": "계좌 관리"
        }
    ],
    "paths": {
        "/user": {
            "post": {
                "tags": [
                    "user"
                ],
                "summary": "계정을 생성한다.\n",
                "description": "",
                "responses": {
                    "200": {
                        "description": "정상적으로 계정 생성됨을 알려줌\n"
                    }
                }
            }
        },
        "/user/{userId}": {
            "delete": {
                "tags": [
                    "user"
                ],
                "summary": "계정을 삭제한다.\n",
                "description": "",
                "parameters": [
                    {
                        "name": "userId",
                        "in": "path",
                        "required": true,
                        "description": "고객 ID",
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "정상적으로 계정 삭제됨을 알려줌\n"
                    }
                }
            },
            "get": {
                "tags": [
                    "user"
                ],
                "summary": "계정을 조회한다.\n",
                "description": "banking server 회원 정보 조회",
                "parameters": [
                    {
                        "name": "userId",
                        "in": "path",
                        "required": true,
                        "description": "고객 ID",
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "정상적으로 계정이 조회됨을 알려줌\n",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "description": "회원정보 조회(비밀번호 찾기, 아이디 찾기, 마이 페이지)",
                                    "required": [
                                        "name",
                                        "email",
                                        "password"
                                    ],
                                    "properties": {
                                        "name": {
                                            "description": "고객 이름",
                                            "type": "string",
                                            "example": "장현호"
                                        },
                                        "email": {
                                            "description": "고객 아이디",
                                            "type": "string",
                                            "example": "현호@gmail.com"
                                        },
                                        "password": {
                                            "description": "고객 비밀번호",
                                            "type": "integer",
                                            "example": 1234
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "tags": [
                    "user"
                ],
                "summary": "계정을 수정한다.(비밀번호 변경)\n",
                "description": "banking server 회원 정보 업데이트",
                "parameters": [
                    {
                        "name": "userId",
                        "in": "path",
                        "required": true,
                        "description": "고객 ID",
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "requestBody": {
                    "description": "회원 정보 업데이트 값",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "description": "회원 이름, 비밀번호 변경",
                                "required": [
                                    "name",
                                    "password"
                                ],
                                "properties": {
                                    "name": {
                                        "description": "고객 이름 변경",
                                        "type": "string",
                                        "example": "장현호"
                                    },
                                    "password": {
                                        "description": "비밀번호 변경",
                                        "type": "integer",
                                        "example": 4567
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "정상적으로 계정이 수정됨을 알려줌\n"
                    }
                }
            }
        },
        "/user/login": {
            "get": {
                "tags": [
                    "user"
                ],
                "summary": "banking server 이용을 위한 로그인\n",
                "description": "banking server 이용을 위한 로그인",
                "parameters": [
                    {
                        "name": "email(login id)",
                        "in": "query",
                        "description": "login id",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "password",
                        "in": "query",
                        "description": "login pwd",
                        "required": true,
                        "schema": {
                            "type": "integer"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "정상적으로 로그인 됨을 알려줌\n"
                    }
                }
            }
        },
        "/user/logout": {
            "get": {
                "tags": [
                    "user"
                ],
                "summary": "banking server 로그아웃\n",
                "description": "banking server 로그아웃",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "정상적으로 로그아웃 됨을 알려줌\n"
                    }
                }
            }
        },
        "/friend": {
            "get": {
                "tags": [
                    "friend"
                ],
                "summary": "친구를 조회한다. (목록)",
                "description": "친구 리스트 조회",
                "responses": {
                    "200": {
                        "description": "정상적으로 친구 조회됨을 알려줌\n",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "description": "친구 목록 조회",
                                    "items": {
                                        "type": "object",
                                        "description": "",
                                        "required": [
                                            "id",
                                            "name",
                                            "account_no"
                                        ],
                                        "properties": {
                                            "id": {
                                                "description": "친구 ID",
                                                "type": "integer",
                                                "example": 12
                                            },
                                            "name": {
                                                "description": "친구 이름",
                                                "type": "string",
                                                "example": "현호 친구"
                                            },
                                            "account_no": {
                                                "description": "친구와 계좌이체한 계좌번호 리스트",
                                                "type": "array",
                                                "items": {
                                                    "type": "string",
                                                    "description": "친구 계좌 번호",
                                                    "example": "1111-2222-1111"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/friend/{friendId}": {
            "delete": {
                "tags": [
                    "friend"
                ],
                "summary": "친구를 삭제한다.(특정)",
                "description": "",
                "parameters": [
                    {
                        "name": "friendId",
                        "in": "path",
                        "description": "친구 아이디",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "정상적으로 친구 삭제됨을 알려줌\n"
                    }
                }
            },
            "get": {
                "tags": [
                    "friend"
                ],
                "summary": "특정 친구 조회 (계좌이체는 친구끼리) 계좌 이력 확인",
                "description": "",
                "parameters": [
                    {
                        "name": "friendId",
                        "in": "path",
                        "description": "친구 아이디",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "정상적으로 특정 친구가 조회됨을 알려줌\n",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "description": "",
                                    "properties": {
                                        "id": {
                                            "description": "친구 ID",
                                            "type": "integer",
                                            "example": 11
                                        },
                                        "name": {
                                            "description": "친구 이름",
                                            "type": "string",
                                            "example": "현호 친구"
                                        },
                                        "account_no": {
                                            "description": "친구와 계좌이체한 계좌번호 리스트",
                                            "type": "array",
                                            "items": {
                                                "type": "string",
                                                "description": "친구 계좌 번호",
                                                "example": "1111-2222-3333"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/account": {
            "get": {
                "tags": [
                    "account"
                ],
                "summary": "전체 내 계좌 조회한다.",
                "description": "",
                "responses": {
                    "200": {
                        "description": "정상적으로 계좌 조회됨을 알려줌\n",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "description": "내 계좌 리스트",
                                    "items": {
                                        "type": "object",
                                        "description": "하나의 계좌",
                                        "required": [
                                            "id",
                                            "account_no",
                                            "balance"
                                        ],
                                        "properties": {
                                            "id": {
                                                "description": "account id",
                                                "type": "integer",
                                                "example": 12
                                            },
                                            "account_no": {
                                                "description": "account number",
                                                "type": "string",
                                                "example": "1111-2222-3333"
                                            },
                                            "balance": {
                                                "description": "잔액",
                                                "type": "integer",
                                                "example": 1100000
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "account"
                ],
                "summary": "계좌 이체 (친구끼리만 가능)",
                "description": "",
                "requestBody": {
                    "description": "친구, 계좌 정보 입력",
                    "content": {
                        "application/json": {
                            "schema": {
                                "required": [
                                    "name",
                                    "price",
                                    "account"
                                ],
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "description": "친구 이름",
                                        "example": "현호 친구"
                                    },
                                    "price": {
                                        "type": "integer",
                                        "example": 12000
                                    },
                                    "account": {
                                        "type": "string",
                                        "example": "1111-2222-1111"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "정상적으로 계좌 이체됨을 알려줌\n"
                    }
                }
            }
        },
        "/account/{accountId}": {
            "get": {
                "tags": [
                    "account"
                ],
                "summary": "특정 계좌 조회",
                "description": "",
                "parameters": [
                    {
                        "name": "accountId",
                        "in": "path",
                        "description": "account id",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "정상적으로 특정 계좌 조회됨을 알려줌\n",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "id": {
                                            "type": "integer",
                                            "description": "account id",
                                            "example": 1
                                        },
                                        "account_no": {
                                            "type": "string",
                                            "description": "account number",
                                            "example": "1111-1111-2222"
                                        },
                                        "balance": {
                                            "type": "integer",
                                            "description": "계좌 잔액",
                                            "example": 5600
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "delete": {
                "tags": [
                    "account"
                ],
                "summary": "특정 계좌 삭제",
                "description": "",
                "parameters": [
                    {
                        "name": "accountId",
                        "in": "path",
                        "description": "account id",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "정상적으로 특정 계좌 삭제됨을 알려줌\n"
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "User": {
                "type": "object",
                "description": "고객 정보",
                "required": [
                    "name",
                    "email",
                    "password"
                ],
                "properties": {
                    "id": {
                        "description": "고객 ID",
                        "type": "integer",
                        "example": 1
                    },
                    "name": {
                        "description": "고객 이름",
                        "type": "string",
                        "example": "장현호"
                    },
                    "email": {
                        "description": "고객 아이디",
                        "type": "string",
                        "example": "현호@gmail.com"
                    },
                    "password": {
                        "description": "고객 비밀번호",
                        "type": "integer",
                        "example": 1234
                    }
                }
            },
            "Account": {
                "type": "object",
                "description": "계좌 정보",
                "required": [
                    "account_no",
                    "balance"
                ],
                "properties": {
                    "id": {
                        "description": "계좌 ID",
                        "type": "integer",
                        "example": 2
                    },
                    "account_no": {
                        "description": "계좌 번호",
                        "type": "string",
                        "example": "1111-2222-1111"
                    },
                    "balance": {
                        "description": "잔액",
                        "type": "integer",
                        "example": 10200
                    }
                }
            },
            "Friend": {
                "type": "object",
                "description": "친구 정보",
                "required": [
                    "name",
                    "account_no"
                ],
                "properties": {
                    "id": {
                        "description": "친구 ID",
                        "type": "integer",
                        "example": 3
                    },
                    "name": {
                        "description": "친구 이름",
                        "type": "string",
                        "example": "현호 친구"
                    },
                    "account_no": {
                        "description": "친구 계좌",
                        "type": "array",
                        "items": {
                            "type": "string",
                            "example": "1111-2222-1111"
                        }
                    }
                }
            }
        }
    }
}