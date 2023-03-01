-- 이미지 검색하기
docker search oracle-xe

-- 이미지 당겨오기
docker pull jaspeen/oracle-xe-11g

-- 당겨온 이미지로 컨테이너 실행하기
docker run --name oracle11g -d -p 8080:8080 -p 1521:1521 jaspeen/oracle-xe-11g

-- 컨테이너 뜬 것 확인
docker ps