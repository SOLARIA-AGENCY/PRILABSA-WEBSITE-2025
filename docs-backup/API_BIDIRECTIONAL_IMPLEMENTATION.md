# API BIDIRECTIONAL IMPLEMENTATION
## PRILABSA Framework - Enterprise Multi-Client Architecture

**Version:** 2.0.0 (API Extension)  
**Author:** Solaria Agency - ECO Lambda  
**Date:** January 2025  
**Status:** Implementation Ready  

---

## 🎯 **OVERVIEW**

This document outlines the implementation of a bidirectional API system for PRILABSA Framework, enabling:
- **Multi-client architecture** with centralized dashboard monitoring
- **Framework immutability** protection
- **Infinite scalability** for new client deployments
- **Real-time metrics aggregation** across all client websites

## 🏗️ **ARCHITECTURE DESIGN**

### **Core Principle: Framework Separation**
```
PRILABSA-FRAMEWORK (BASE - IMMUTABLE)
├── Framework Core (PROTECTED)
│   ├── /src/components/     → UI component library
│   ├── /src/utils/          → Utility functions  
│   ├── /src/hooks/          → Custom React hooks
│   └── /src/services/       → Core services
├── API Layer (NEW - BIDIRECTIONAL)
│   ├── /src/api/            → REST endpoints & clients
│   ├── /src/api/routes/     → Express route handlers
│   ├── /src/api/services/   → API business logic
│   └── /src/api/types/      → API TypeScript definitions
├── Client Configuration (MUTABLE)
│   ├── /src/config/client/  → Client-specific settings
│   ├── /src/assets/client/  → Client branding assets
│   └── /src/content/client/ → Client-specific content
└── Protection Layer
    ├── .cursorignore        → Protect core files from AI modification
    └── .gitignore           → Standard Git exclusions
```

### **Deployment Architecture**
```
🏢 CLIENT-1.COM (Framework Copy + Config)
   ├── Corporate website
   ├── Catalog/Blog  
   ├── Analytics tracking
   └── API Endpoint → /api/metrics

🏢 CLIENT-2.COM (Framework Copy + Config)  
   ├── Corporate website
   ├── Catalog/Blog
   ├── Analytics tracking
   └── API Endpoint → /api/metrics

📊 DASHBOARD.SOLARIA.AGENCY (Framework + Dashboard Mode)
   ├── Multi-client monitoring interface
   ├── Aggregation API client
   ├── Comparative analytics
   └── Real-time status monitoring
```

---

## 🚀 **IMPLEMENTATION PHASES**

### **PHASE 1: API Foundation (6-8 hours)**

#### **1.1 Create API Directory Structure**
```bash
mkdir -p src/api/{routes,services,types,middleware}
mkdir -p src/config/client
mkdir -p src/assets/client
mkdir -p src/content/client
```

#### **1.2 API Base Configuration**
```typescript
// src/api/config/api.config.ts
export const apiConfig = {
  port: process.env.VITE_API_PORT || 3001,
  cors: {
    origin: process.env.VITE_CORS_ORIGINS?.split(',') || ['http://localhost:5173'],
    credentials: true
  },
  auth: {
    tokenSecret: process.env.VITE_API_TOKEN_SECRET,
    tokenExpiry: '24h'
  },
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // requests per windowMs
  }
};
```

#### **1.3 Express Server Setup**
```typescript
// src/api/server.ts
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { apiConfig } from './config/api.config';
import { metricsRouter } from './routes/metrics';
import { authMiddleware } from './middleware/auth';

const app = express();

// Middleware
app.use(cors(apiConfig.cors));
app.use(express.json());
app.use(rateLimit(apiConfig.rateLimit));

// Routes
app.use('/api/metrics', authMiddleware, metricsRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: Date.now() });
});

export default app;
```

### **PHASE 2: Metrics Export API (4-6 hours)**

#### **2.1 Metrics Collection Service**
```typescript
// src/api/services/MetricsCollector.ts
export class MetricsCollector {
  private clientConfig = getClientConfig();
  
  async collectAllMetrics(): Promise<ClientMetrics> {
    const [analytics, performance, technical, security] = await Promise.all([
      this.collectAnalyticsMetrics(),
      this.collectPerformanceMetrics(), 
      this.collectTechnicalMetrics(),
      this.collectSecurityMetrics()
    ]);

    return {
      client: {
        id: this.clientConfig.id,
        name: this.clientConfig.name,
        domain: this.clientConfig.domain,
        type: this.clientConfig.type
      },
      timestamp: Date.now(),
      analytics,
      performance,
      technical,
      security,
      meta: {
        version: packageJson.version,
        framework: 'PRILABSA',
        lastUpdated: new Date().toISOString()
      }
    };
  }

  private async collectAnalyticsMetrics(): Promise<AnalyticsMetrics> {
    const ga4Service = new GoogleAnalyticsService();
    
    return {
      visitors: await ga4Service.getVisitors('7d'),
      pageViews: await ga4Service.getPageViews('7d'),
      sessions: await ga4Service.getSessions('7d'),
      bounceRate: await ga4Service.getBounceRate('7d'),
      conversions: await ga4Service.getConversions('7d'),
      topPages: await ga4Service.getTopPages('7d'),
      trafficSources: await ga4Service.getTrafficSources('7d'),
      deviceTypes: await ga4Service.getDeviceBreakdown('7d')
    };
  }

  private async collectPerformanceMetrics(): Promise<PerformanceMetrics> {
    return {
      loadTime: await this.getAverageLoadTime(),
      coreWebVitals: await this.getCoreWebVitals(),
      uptime: await this.getUptimePercentage(),
      errorRate: await this.getErrorRate(),
      throughput: await this.getThroughput(),
      responseTime: await this.getAverageResponseTime()
    };
  }
}
```

#### **2.2 Metrics Export Endpoints**
```typescript
// src/api/routes/metrics.ts
import express from 'express';
import { MetricsCollector } from '../services/MetricsCollector';

const router = express.Router();
const collector = new MetricsCollector();

// GET /api/metrics - Complete metrics export
router.get('/', async (req, res) => {
  try {
    const metrics = await collector.collectAllMetrics();
    res.json({
      success: true,
      data: metrics,
      timestamp: Date.now()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: Date.now()
    });
  }
});

// GET /api/metrics/analytics - Analytics only
router.get('/analytics', async (req, res) => {
  const analytics = await collector.collectAnalyticsMetrics();
  res.json({ data: analytics });
});

// GET /api/metrics/performance - Performance only  
router.get('/performance', async (req, res) => {
  const performance = await collector.collectPerformanceMetrics();
  res.json({ data: performance });
});

// GET /api/metrics/technical - Technical only
router.get('/technical', async (req, res) => {
  const technical = await collector.collectTechnicalMetrics();
  res.json({ data: technical });
});

export { router as metricsRouter };
```

### **PHASE 3: Aggregation API Client (4-6 hours)**

#### **3.1 Multi-Client API Service**
```typescript
// src/api/services/ClientsAggregator.ts
export class ClientsAggregator {
  private clients: ClientConfiguration[];
  
  constructor() {
    this.clients = getClientsConfiguration();
  }

  async aggregateAllClients(): Promise<AggregatedMetrics> {
    const clientPromises = this.clients.map(async (client) => {
      try {
        const response = await fetch(`${client.apiUrl}/api/metrics`, {
          headers: {
            'Authorization': `Bearer ${client.apiToken}`,
            'Content-Type': 'application/json'
          },
          timeout: 10000
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        return {
          clientId: client.id,
          clientName: client.name,
          status: 'online',
          metrics: data.data,
          lastUpdate: data.timestamp,
          responseTime: Date.now() - startTime
        };
      } catch (error) {
        return {
          clientId: client.id,
          clientName: client.name,
          status: 'error',
          error: error.message,
          lastUpdate: Date.now(),
          responseTime: null
        };
      }
    });

    const results = await Promise.all(clientPromises);
    
    return {
      clients: results,
      summary: this.generateSummary(results),
      comparative: this.generateComparative(results),
      alerts: this.generateAlerts(results),
      timestamp: Date.now()
    };
  }

  private generateSummary(clients: ClientMetrics[]): SummaryMetrics {
    const onlineClients = clients.filter(c => c.status === 'online');
    
    return {
      totalClients: clients.length,
      onlineClients: onlineClients.length,
      totalVisitors: onlineClients.reduce((sum, c) => sum + (c.metrics?.analytics?.visitors || 0), 0),
      totalConversions: onlineClients.reduce((sum, c) => sum + (c.metrics?.analytics?.conversions || 0), 0),
      averageUptime: onlineClients.reduce((sum, c) => sum + (c.metrics?.performance?.uptime || 0), 0) / onlineClients.length,
      averageLoadTime: onlineClients.reduce((sum, c) => sum + (c.metrics?.performance?.loadTime || 0), 0) / onlineClients.length
    };
  }
}
```

### **PHASE 4: Dashboard Integration (4-6 hours)**

#### **4.1 Multi-Client Dashboard Component**
```typescript
// src/apps/technical/components/MultiClientDashboard.tsx
export const MultiClientDashboard = () => {
  const [refreshInterval, setRefreshInterval] = useState(30000);
  
  const { data: aggregatedData, isLoading, error } = useQuery({
    queryKey: ['clients-aggregated'],
    queryFn: () => clientsAggregator.aggregateAllClients(),
    refetchInterval: refreshInterval,
    staleTime: 15000
  });

  if (isLoading) return <DashboardSkeleton />;
  if (error) return <ErrorState error={error} />;

  return (
    <div className="space-y-8">
      {/* Real-time Summary */}
      <SummaryCards data={aggregatedData.summary} />
      
      {/* Clients Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {aggregatedData.clients.map((client) => (
          <ClientStatusCard 
            key={client.clientId}
            client={client}
            onDrillDown={() => setSelectedClient(client.clientId)}
          />
        ))}
      </div>

      {/* Comparative Analytics */}
      <ComparativeSection data={aggregatedData.comparative} />
      
      {/* Active Alerts */}
      {aggregatedData.alerts.length > 0 && (
        <AlertsSection alerts={aggregatedData.alerts} />
      )}
    </div>
  );
};
```

---

## 🔐 **SECURITY IMPLEMENTATION**

### **Authentication Middleware**
```typescript
// src/api/middleware/auth.ts
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.VITE_API_TOKEN_SECRET);
    req.client = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
```

### **Rate Limiting**
```typescript
// src/api/middleware/rateLimiter.ts
export const createRateLimiter = (windowMs: number, max: number) => {
  return rateLimit({
    windowMs,
    max,
    message: {
      error: 'Too many requests',
      retryAfter: Math.ceil(windowMs / 1000)
    },
    standardHeaders: true,
    legacyHeaders: false
  });
};
```

---

## 🧪 **TESTING STRATEGY**

### **API Endpoint Tests**
```typescript
// src/api/__tests__/metrics.test.ts
describe('Metrics API', () => {
  test('GET /api/metrics returns complete metrics', async () => {
    const response = await request(app)
      .get('/api/metrics')
      .set('Authorization', `Bearer ${validToken}`)
      .expect(200);

    expect(response.body).toHaveProperty('success', true);
    expect(response.body.data).toHaveProperty('analytics');
    expect(response.body.data).toHaveProperty('performance');
  });

  test('unauthorized access returns 401', async () => {
    await request(app)
      .get('/api/metrics')
      .expect(401);
  });
});
```

### **Integration Tests**
```typescript
// src/api/__tests__/integration.test.ts
describe('Multi-Client Integration', () => {
  test('aggregates metrics from multiple clients', async () => {
    // Mock client APIs
    nock('https://client1.com').get('/api/metrics').reply(200, mockClient1Data);
    nock('https://client2.com').get('/api/metrics').reply(200, mockClient2Data);

    const aggregator = new ClientsAggregator();
    const result = await aggregator.aggregateAllClients();

    expect(result.clients).toHaveLength(2);
    expect(result.summary.totalVisitors).toBeGreaterThan(0);
  });
});
```

---

## 📦 **DEPLOYMENT CONFIGURATION**

### **Environment Variables**
```bash
# Client-specific variables
VITE_CLIENT_ID=prilabsa
VITE_CLIENT_NAME=PRILABSA
VITE_CLIENT_DOMAIN=prilabsa.com
VITE_CLIENT_TYPE=corporate

# API Configuration
VITE_API_PORT=3001
VITE_API_TOKEN_SECRET=your-super-secret-key
VITE_CORS_ORIGINS=https://dashboard.solaria.agency,https://prilabsa.com

# Analytics Integration
VITE_GA_API_KEY=your-ga-api-key
VITE_GA_PROPERTY_ID=GA4-PROPERTY-ID

# Dashboard Mode (only for central dashboard)
VITE_DASHBOARD_MODE=true
VITE_CLIENTS_CONFIG=prilabsa,cofimar,client3
```

### **Docker Configuration**
```dockerfile
# Dockerfile.api
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY src/api ./src/api
COPY dist ./dist

EXPOSE 3001
CMD ["node", "dist/api/server.js"]
```

---

## 🚀 **DEPLOYMENT GUIDE**

### **Step 1: Prepare Base Framework**
```bash
# Clone and setup base framework
git clone https://github.com/solariaagency/prilabsa-framework.git client-name
cd client-name
npm install
```

### **Step 2: Client Configuration**
```bash
# Copy environment template
cp env.example .env

# Edit client-specific variables
VITE_CLIENT_ID=your-client-id
VITE_CLIENT_NAME=Your Client Name
VITE_CLIENT_DOMAIN=yourclient.com
```

### **Step 3: API Deployment**
```bash
# Build API
npm run build:api

# Start API server
npm run start:api

# Verify API health
curl https://yourclient.com/api/health
```

### **Step 4: Dashboard Registration**
```bash
# Add client to dashboard configuration
echo "yourclient" >> dashboard/.env.VITE_CLIENTS_CONFIG
```

---

## 📊 **MONITORING & MAINTENANCE**

### **Health Checks**
- **API Endpoint Health:** `GET /api/health`
- **Metrics Availability:** `GET /api/metrics/status`
- **Authentication Status:** Token validation endpoint
- **Database Connectivity:** Connection pool status

### **Performance Monitoring**
- Response time tracking
- Error rate monitoring  
- Memory usage alerts
- API throughput metrics

### **Automated Alerts**
- Client API downtime detection
- Performance degradation alerts
- Security breach notifications
- Capacity threshold warnings

---

## 🔧 **TROUBLESHOOTING**

### **Common Issues**

#### **CORS Errors**
```typescript
// Solution: Update CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
```

#### **Authentication Failures**
```bash
# Verify token generation
node scripts/generate-token.js CLIENT_ID

# Test token validation
curl -H "Authorization: Bearer TOKEN" https://client.com/api/metrics
```

#### **Performance Issues**
```typescript
// Enable caching
const cache = new NodeCache({ stdTTL: 300 }); // 5 minutes

router.get('/metrics', async (req, res) => {
  const cacheKey = `metrics-${req.client.id}`;
  let metrics = cache.get(cacheKey);
  
  if (!metrics) {
    metrics = await collector.collectAllMetrics();
    cache.set(cacheKey, metrics);
  }
  
  res.json(metrics);
});
```

---

## 📈 **SUCCESS METRICS**

### **Technical KPIs**
- ✅ API Response Time: < 500ms
- ✅ Uptime: > 99.9%
- ✅ Error Rate: < 0.1%
- ✅ Test Coverage: > 80%

### **Business KPIs**
- ✅ Client Deployment Time: < 4 hours
- ✅ New Client Onboarding: < 1 day
- ✅ Dashboard Data Accuracy: > 99%
- ✅ Real-time Update Latency: < 30 seconds

---

## 🔮 **FUTURE ENHANCEMENTS**

### **Phase 2 Features**
- Real-time WebSocket connections
- Advanced analytics ML insights
- White-label dashboard options
- Mobile app integration

### **Phase 3 Features**
- Multi-tenant SaaS platform
- Automated client provisioning
- Advanced security features
- Enterprise SSO integration

---

**Document Status:** ✅ Ready for Implementation  
**Next Step:** Create feature branch and begin Phase 1 development 