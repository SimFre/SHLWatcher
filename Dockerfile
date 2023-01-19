FROM node:current-alpine
WORKDIR /app
RUN apk add --no-cache ca-certificates git nss \
    && git clone https://github.com/SimFre/SHLWatcher.git . \
    && npm ci --only-production \
    && addgroup -S servicegroup \
    && adduser -S -G serviceuser -h /app serviceuser \
    && chown -R serviceuser:servicegroup /app \
    && chmod +x /app/init.sh
COPY . .
USER serviceuser
CMD /app/init.sh
