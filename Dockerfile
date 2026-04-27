FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock* bun.lockb* ./
RUN bun install --frozen-lockfile || bun install
COPY . .
RUN bunx --bun next build

FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html
COPY <<'EOF' /etc/nginx/conf.d/default.conf
server {
  listen 80 default_server;
  root /usr/share/nginx/html;
  index index.html;
  location / { try_files $uri $uri/ $uri.html =404; }
  error_page 404 /404.html;
}
EOF
EXPOSE 80
