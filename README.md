This project demonstrates a **zero-downtime Blue-Green Deployment** architecture using **Docker Compose** and **NGINX**.

## Overview
Two identical Node.js API containers (`api-blue` and `api-green`) run in parallel.  
NGINX acts as a reverse proxy and routes all traffic to one of them (Blue or Green).  
By rebuilding and reloading NGINX, traffic can be switched instantly — simulating a production deployment rollout without downtime.

