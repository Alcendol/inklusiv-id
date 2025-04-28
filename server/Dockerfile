FROM golang:1.24

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

# Install Air For Hot Reload
RUN go install github.com/air-verse/air@latest

COPY . ./

EXPOSE 8080

CMD [ "air" ]