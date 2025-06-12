# API ENDPOINTS SPECIFICATION
## PRILABSA Framework - Bidirectional API Reference

**Version:** 2.0.0  
**Author:** Solaria Agency - ECO Lambda  
**Date:** January 2025  
**Status:** Implementation Ready

---

## 🎯 **API OVERVIEW**

The PRILABSA Bidirectional API provides comprehensive endpoints for:
- **Metrics Export:** Client website data export to central dashboard
- **Analytics Aggregation:** Real-time data collection from multiple clients
- **Authentication:** Secure API access and token management
- **Health Monitoring:** System status and performance tracking

### **Base URL Structure**
```
Client Websites: https://[client-domain]/api/
Dashboard API:   https://dashboard.solaria.agency/api/
```

### **Authentication**
All API endpoints require JWT Bearer token authentication:
```http
Authorization: Bearer [JWT_TOKEN]
```

---

## 📊 **METRICS EXPORT ENDPOINTS (Client Websites)**

### **GET /api/metrics**
Complete metrics export from client website.

**Purpose:** Export all available metrics for dashboard aggregation

#### **Request**
```http
GET /api/metrics HTTP/1.1
Host: client-domain.com
Authorization: Bearer jwt_token_here
Content-Type: application/json
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "client": {
      "id": "client-id",
      "name": "Client Company Name",
      "domain": "client-domain.com",
      "type": "corporate"
    },
    "timestamp": 1704067200000,
    "analytics": {
      "visitors": {
        "total": 15420,
        "unique": 12350,
        "returning": 3070,
        "newUsers": 9280
      },
      "pageViews": {
        "total": 45280,
        "unique": 28450,
        "averagePerSession": 2.94
      },
      "sessions": {
        "total": 15420,
        "averageDuration": 180.5,
        "bounceRate": 0.34
      },
      "conversions": {
        "total": 245,
        "conversionRate": 0.016,
        "revenue": 12450.50
      },
      "topPages": [
        { "page": "/", "views": 8420, "uniqueViews": 6890 },
        { "page": "/services", "views": 5280, "uniqueViews": 4890 },
        { "page": "/about", "views": 3890, "uniqueViews": 3420 }
      ],
      "trafficSources": {
        "organic": 0.45,
        "direct": 0.32,
        "social": 0.15,
        "referral": 0.08
      },
      "deviceTypes": {
        "desktop": 0.58,
        "mobile": 0.35,
        "tablet": 0.07
      }
    },
    "performance": {
      "loadTime": 1.85,
      "coreWebVitals": {
        "fcp": 1.2,
        "lcp": 2.1,
        "cls": 0.05,
        "fid": 45
      },
      "uptime": 99.8,
      "errorRate": 0.002,
      "throughput": 450.8,
      "responseTime": 285
    },
    "technical": {
      "buildVersion": "1.2.0",
      "framework": "PRILABSA",
      "lastDeployment": "2025-01-01T12:00:00Z",
      "testsPassing": 95,
      "testCoverage": 88.5,
      "dependencies": {
        "total": 156,
        "outdated": 3,
        "vulnerable": 0
      }
    },
    "security": {
      "sslStatus": "valid",
      "securityHeaders": {
        "csp": true,
        "hsts": true,
        "xss": true,
        "nosniff": true
      },
      "vulnerabilities": 0,
      "lastAudit": "2025-01-01T10:00:00Z"
    },
    "meta": {
      "version": "1.2.0",
      "framework": "PRILABSA",
      "lastUpdated": "2025-01-01T12:30:00Z",
      "dataFreshness": 300
    }
  },
  "timestamp": 1704067200000
}
```

#### **Error Responses**
```json
{
  "success": false,
  "error": "Authentication failed",
  "code": "AUTH_ERROR",
  "timestamp": 1704067200000
}
```

#### **Status Codes**
- `200 OK` - Metrics successfully retrieved
- `401 Unauthorized` - Invalid or missing authentication
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error during metrics collection

---

### **GET /api/metrics/analytics**
Analytics-only metrics export.

**Purpose:** Export only Google Analytics and Meta Pixel data

#### **Request**
```http
GET /api/metrics/analytics HTTP/1.1
Host: client-domain.com
Authorization: Bearer jwt_token_here
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "client": {
      "id": "client-id",
      "name": "Client Company Name"
    },
    "analytics": {
      "visitors": { /* same as above */ },
      "pageViews": { /* same as above */ },
      "sessions": { /* same as above */ },
      "conversions": { /* same as above */ },
      "topPages": [ /* same as above */ ],
      "trafficSources": { /* same as above */ },
      "deviceTypes": { /* same as above */ }
    },
    "timestamp": 1704067200000
  }
}
```

---

### **GET /api/metrics/performance**
Performance-only metrics export.

**Purpose:** Export Core Web Vitals and technical performance data

#### **Request**
```http
GET /api/metrics/performance HTTP/1.1
Host: client-domain.com
Authorization: Bearer jwt_token_here
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "client": {
      "id": "client-id",
      "name": "Client Company Name"
    },
    "performance": {
      "loadTime": 1.85,
      "coreWebVitals": {
        "fcp": 1.2,
        "lcp": 2.1,
        "cls": 0.05,
        "fid": 45
      },
      "uptime": 99.8,
      "errorRate": 0.002,
      "throughput": 450.8,
      "responseTime": 285
    },
    "timestamp": 1704067200000
  }
}
```

---

### **GET /api/metrics/technical**
Technical metrics export.

**Purpose:** Export build, deployment, and framework status

#### **Request**
```http
GET /api/metrics/technical HTTP/1.1
Host: client-domain.com
Authorization: Bearer jwt_token_here
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "client": {
      "id": "client-id",
      "name": "Client Company Name"
    },
    "technical": {
      "buildVersion": "1.2.0",
      "framework": "PRILABSA",
      "lastDeployment": "2025-01-01T12:00:00Z",
      "testsPassing": 95,
      "testCoverage": 88.5,
      "dependencies": {
        "total": 156,
        "outdated": 3,
        "vulnerable": 0
      }
    },
    "timestamp": 1704067200000
  }
}
```

---

### **GET /api/health**
Health check endpoint.

**Purpose:** Verify API availability and basic functionality

#### **Request**
```http
GET /api/health HTTP/1.1
Host: client-domain.com
```

#### **Response**
```json
{
  "status": "OK",
  "timestamp": 1704067200000,
  "version": "2.0.0",
  "uptime": 345600,
  "services": {
    "database": "connected",
    "analytics": "operational",
    "cache": "operational"
  }
}
```

---

## 🔄 **AGGREGATION ENDPOINTS (Dashboard API)**

### **GET /api/clients**
List all registered clients.

**Purpose:** Get list of all clients configured in dashboard

#### **Request**
```http
GET /api/clients HTTP/1.1
Host: dashboard.solaria.agency
Authorization: Bearer jwt_token_here
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "clients": [
      {
        "id": "prilabsa",
        "name": "PRILABSA",
        "domain": "prilabsa.com",
        "status": "online",
        "lastUpdate": 1704067200000,
        "apiUrl": "https://prilabsa.com/api",
        "type": "corporate"
      },
      {
        "id": "cofimar",
        "name": "COFIMAR",
        "domain": "cofimar.com",
        "status": "online",
        "lastUpdate": 1704067180000,
        "apiUrl": "https://cofimar.com/api",
        "type": "corporate"
      }
    ],
    "summary": {
      "totalClients": 2,
      "onlineClients": 2,
      "offlineClients": 0
    },
    "timestamp": 1704067200000
  }
}
```

---

### **GET /api/aggregated**
Aggregated metrics from all clients.

**Purpose:** Get combined metrics from all client websites

#### **Request**
```http
GET /api/aggregated HTTP/1.1
Host: dashboard.solaria.agency
Authorization: Bearer jwt_token_here
```

#### **Query Parameters**
- `timeframe` - Data timeframe (1h, 24h, 7d, 30d) - Default: 24h
- `metrics` - Specific metrics (analytics, performance, technical) - Default: all
- `clients` - Specific client IDs (comma-separated) - Default: all

#### **Example Request**
```http
GET /api/aggregated?timeframe=7d&metrics=analytics,performance&clients=prilabsa,cofimar
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "clients": [
      {
        "clientId": "prilabsa",
        "clientName": "PRILABSA",
        "status": "online",
        "metrics": {
          "analytics": { /* complete analytics data */ },
          "performance": { /* complete performance data */ }
        },
        "lastUpdate": 1704067200000,
        "responseTime": 145
      },
      {
        "clientId": "cofimar",
        "clientName": "COFIMAR", 
        "status": "online",
        "metrics": {
          "analytics": { /* complete analytics data */ },
          "performance": { /* complete performance data */ }
        },
        "lastUpdate": 1704067180000,
        "responseTime": 167
      }
    ],
    "summary": {
      "totalClients": 2,
      "onlineClients": 2,
      "totalVisitors": 28940,
      "totalConversions": 487,
      "averageUptime": 99.75,
      "averageLoadTime": 1.92
    },
    "comparative": {
      "bestPerforming": {
        "visitors": { "clientId": "prilabsa", "value": 15420 },
        "loadTime": { "clientId": "cofimar", "value": 1.65 },
        "uptime": { "clientId": "prilabsa", "value": 99.8 }
      },
      "trends": {
        "visitorsGrowth": 0.15,
        "performanceImprovement": 0.08,
        "conversionIncrease": 0.12
      }
    },
    "alerts": [
      {
        "type": "warning",
        "clientId": "cofimar",
        "message": "Load time above threshold (2.1s > 2.0s)",
        "severity": "medium",
        "timestamp": 1704067100000
      }
    ],
    "timestamp": 1704067200000
  }
}
```

---

### **GET /api/client/{clientId}**
Individual client metrics.

**Purpose:** Get detailed metrics for a specific client

#### **Request**
```http
GET /api/client/prilabsa HTTP/1.1
Host: dashboard.solaria.agency
Authorization: Bearer jwt_token_here
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "client": {
      "id": "prilabsa",
      "name": "PRILABSA",
      "domain": "prilabsa.com",
      "type": "corporate",
      "status": "online"
    },
    "metrics": {
      /* Complete metrics data same as /api/metrics endpoint */
    },
    "history": {
      "lastWeek": {
        "visitors": [1200, 1350, 1180, 1420, 1580, 1390, 1450],
        "loadTime": [1.8, 1.9, 1.7, 1.8, 2.1, 1.9, 1.8]
      }
    },
    "lastUpdate": 1704067200000,
    "nextUpdate": 1704067500000
  }
}
```

---

## 🔐 **AUTHENTICATION ENDPOINTS**

### **POST /api/auth/token**
Generate API token.

**Purpose:** Authenticate and receive JWT token for API access

#### **Request**
```http
POST /api/auth/token HTTP/1.1
Host: client-domain.com
Content-Type: application/json

{
  "clientId": "prilabsa",
  "apiKey": "api_key_here",
  "apiSecret": "api_secret_here"
}
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 86400,
    "tokenType": "Bearer",
    "scope": "metrics:read analytics:read"
  },
  "timestamp": 1704067200000
}
```

---

### **POST /api/auth/refresh**
Refresh API token.

**Purpose:** Refresh expired or near-expired JWT token

#### **Request**
```http
POST /api/auth/refresh HTTP/1.1
Host: client-domain.com
Authorization: Bearer jwt_token_here
Content-Type: application/json

{
  "refreshToken": "refresh_token_here"
}
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 86400,
    "tokenType": "Bearer"
  },
  "timestamp": 1704067200000
}
```

---

### **POST /api/auth/validate**
Validate API token.

**Purpose:** Verify token validity and get token information

#### **Request**
```http
POST /api/auth/validate HTTP/1.1
Host: client-domain.com
Authorization: Bearer jwt_token_here
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "valid": true,
    "clientId": "prilabsa",
    "scope": "metrics:read analytics:read",
    "expiresAt": 1704153600000,
    "issued": 1704067200000
  },
  "timestamp": 1704067200000
}
```

---

## 📈 **REAL-TIME ENDPOINTS**

### **WebSocket: /api/ws/metrics**
Real-time metrics streaming.

**Purpose:** Live metrics updates via WebSocket connection

#### **Connection**
```javascript
const ws = new WebSocket('wss://client-domain.com/api/ws/metrics');

// Authentication
ws.send(JSON.stringify({
  type: 'auth',
  token: 'jwt_token_here'
}));

// Subscribe to specific metrics
ws.send(JSON.stringify({
  type: 'subscribe',
  metrics: ['analytics', 'performance']
}));
```

#### **Message Format**
```json
{
  "type": "metrics_update",
  "clientId": "prilabsa",
  "timestamp": 1704067200000,
  "data": {
    "analytics": {
      "realTimeUsers": 45,
      "currentPageViews": 12
    },
    "performance": {
      "currentLoadTime": 1.8,
      "serverResponseTime": 180
    }
  }
}
```

---

## ⚠️ **ERROR HANDLING**

### **Error Response Format**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": "Additional error details",
    "timestamp": 1704067200000,
    "requestId": "req_12345"
  }
}
```

### **Common Error Codes**
- `AUTH_ERROR` - Authentication failed
- `INVALID_TOKEN` - JWT token invalid or expired
- `RATE_LIMIT` - Too many requests
- `CLIENT_NOT_FOUND` - Client ID not found
- `METRICS_UNAVAILABLE` - Metrics collection failed
- `INVALID_PARAMS` - Invalid request parameters
- `SERVER_ERROR` - Internal server error

---

## 🔒 **RATE LIMITING**

### **Default Limits**
- **Metrics Endpoints:** 100 requests per 15 minutes
- **Aggregation Endpoints:** 50 requests per 15 minutes  
- **Authentication Endpoints:** 10 requests per 5 minutes
- **Health Checks:** 300 requests per 15 minutes

### **Rate Limit Headers**
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 85
X-RateLimit-Reset: 1704067800
```

---

## 📋 **REQUEST/RESPONSE EXAMPLES**

### **Complete Metrics Collection Flow**

1. **Authenticate**
```bash
curl -X POST https://prilabsa.com/api/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": "prilabsa",
    "apiKey": "your_api_key",
    "apiSecret": "your_api_secret"
  }'
```

2. **Get Complete Metrics**
```bash
curl -X GET https://prilabsa.com/api/metrics \
  -H "Authorization: Bearer your_jwt_token"
```

3. **Dashboard Aggregation**
```bash
curl -X GET https://dashboard.solaria.agency/api/aggregated \
  -H "Authorization: Bearer dashboard_jwt_token"
```

### **Performance Monitoring Flow**

1. **Get Performance Metrics**
```bash
curl -X GET https://prilabsa.com/api/metrics/performance \
  -H "Authorization: Bearer your_jwt_token"
```

2. **Set Up Real-time Monitoring**
```javascript
const ws = new WebSocket('wss://prilabsa.com/api/ws/metrics');
ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'auth',
    token: 'your_jwt_token'
  }));
  
  ws.send(JSON.stringify({
    type: 'subscribe',
    metrics: ['performance']
  }));
};
```

---

## 📊 **API METRICS & MONITORING**

### **Performance Targets**
- **Response Time:** < 500ms (95th percentile)
- **Availability:** > 99.9% uptime
- **Error Rate:** < 0.1% of requests
- **Throughput:** > 1000 requests/minute per endpoint

### **Monitoring Endpoints**
- **Health Check:** `GET /api/health`
- **Metrics Status:** `GET /api/status`
- **Performance Stats:** `GET /api/stats`

---

**Document Status:** ✅ Implementation Ready  
**API Version:** 2.0.0  
**Last Updated:** January 2025  
**Next Review:** March 2025