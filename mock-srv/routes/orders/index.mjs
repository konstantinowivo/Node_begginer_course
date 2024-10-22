"use strict";

export default async function (fastify, opts) {
    fastify.get(
        "/:category",
        { websocket: true },
        (connection, request) => {
        // Verifica si la conexión es válida
        if (!connection) {
            console.error('WebSocket connection is undefined');
            return;
        }

        // Enviar un mensaje al cliente WebSocket
        connection.send(JSON.stringify({ id: "A1", total: 3 }));

        // Manejo de mensajes recibidos
        connection.on('message', (message) => {
            console.log('Received message:', message);
        });

        // Manejo de cierre de conexión
        connection.on('close', () => {
            console.log('Connection closed');
        });
        }
    );
}
