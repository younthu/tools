FROM node:16-alpine AS installer
COPY package.json ./
RUN npm i tyarn -g
RUN tyarn
RUN npx update-browserslist-db@latest
# RUN yarn

FROM node:16-alpine AS builder
COPY --from=installer /node_modules ./node_modules
COPY . .
RUN npx update-browserslist-db@latest
RUN npm run build

FROM  vixlet/nginx:alpine
COPY --from=builder /dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
