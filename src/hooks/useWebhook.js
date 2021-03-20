import React, {useState, useEffect} from 'react';

export default function useWebhook(){
    const http = require('http');

    const hostname  = '127.0.0.1';
    const port      = 3000;

    const app = http.createServer(function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        res.end(
            JSON.stringify({
                firstName: "John",
                lastName: "Doe"
            })
        );
    });

    app.listen(port, hostname);
}