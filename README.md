This project shows how to deploy updates without downtime using **Docker Compose**, **Node.js**, and **NGINX**.

- Two versions of the same app run: **Blue** and **Green**.  
- Only one version is live at a time.  
- You can switch traffic between them using a script.  
- NGINX handles the routing.  
- A small web page shows which version is active.

Purpose: A simple demo of Blue-Green deployment — a DevOps technique for zero downtime during app updates.

```bash
cd deploy
docker compose build
docker compose up -d

# Check which version is live:
curl http://localhost:8080/version

# Switch versions
bash switch.sh blue
bash switch.sh green

# To view in a browser:
cd ../frontend
python3 -m http.server 5500
