package main

import (
    "fmt"
    "log"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	fmt.Fprintf(w, "This is from Go")
}

func main() {
	http.HandleFunc("/", handler)

	addr := "0.0.0.0:8080"  
	log.Fatal(http.ListenAndServe(addr, nil))  
}

