# Use the official NGINX image from Docker Hub
FROM nginx:latest

# Copy the build output to the NGINX html directory
COPY build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run NGINX
CMD ["nginx", "-g", "daemon off;"]