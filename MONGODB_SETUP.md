# MongoDB Connection Setup

## Database is not connecting? Follow these options:

### Option 1: Install MongoDB Locally (Recommended for Development)

#### Windows:
1. Download MongoDB Community Edition from: https://www.mongodb.com/try/download/community
2. Run the installer
3. Accept the default installation path
4. Check "Install MongoDB as a Service"
5. MongoDB will start automatically

To verify installation:
```powershell
mongosh
```

### Option 2: Use MongoDB Atlas (Cloud - Free Tier Available)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Get your connection string
5. Update the connection string in `src/config/db.js`:

```javascript
// Replace the connection string:
await mongoose.connect("mongodb+srv://username:password@cluster.mongodb.net/innerwear_store");
```

### Option 3: Use Docker (if Docker is installed)

Run MongoDB in Docker:
```powershell
docker run -d -p 27017:27017 --name mongodb mongo
```

## Testing the Connection

After setting up, restart the server:
```powershell
node server.js
```

You should see:
```
✓ MongoDB connected successfully
  Host: 127.0.0.1
  Database: innerwear_store
```

## Current Configuration

Database: `innerwear_store`
Connection: `mongodb://127.0.0.1:27017/innerwear_store`
Timeout: 5 seconds
