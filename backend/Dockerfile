FROM node as builder

# Create app directory
WORKDIR /usr/src/app

RUN apt update -y && apt upgrade -y && apt install -y dumb-init

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:slim

ENV NODE_ENV production
USER node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/bin/dumb-init /usr/bin/dumb-init

EXPOSE 5005
ENTRYPOINT [ "dumb-init", "--" ]
CMD [ "node", "dist/index.js" ]
