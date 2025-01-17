FROM node

RUN mkdir /mesh
RUN mkdir /mesh/api_spec
RUN mkdir /mesh/tspec-with-joi-to-json

# 소스 복사
COPY . /mesh/api_spec

WORKDIR /mesh/api_spec

RUN npm install

RUN npm run build
# 실행 명령어
CMD ["npm", "run", "pack"]