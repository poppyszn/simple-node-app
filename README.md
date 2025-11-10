docker build -t simple-node-app:latest .

kind load docker-image simple-node-app:latest

kubectl rollout restart deployment simple-node-app -n simple-node-app

Make sure image has these values:

image: simple-node-app:latest
imagePullPolicy: Never # To make sure it uses a local image

or use an image tag like:
image: simple-node-app:v1.0.0