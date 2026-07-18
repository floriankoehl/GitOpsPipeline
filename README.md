# Florian Köhl – CV Demo App

Eine einfache responsive React-Anwendung, die als Demo-Projekt für eine CI/CD-Pipeline gedacht ist.

## Lokal starten

```bash
npm install
npm run dev
```

## Produktions-Build erstellen

```bash
npm run build
```

Der fertige Build liegt danach im Ordner `dist`.

## Mit Docker starten

Docker baut die React-Anwendung in einer Node.js-Build-Stage und kopiert das Ergebnis anschließend in ein schlankes Nginx-Image.

```bash
docker build -t florian-koehl-cv .
docker run --rm -p 8080:80 florian-koehl-cv
```

Die Anwendung ist anschließend unter <http://localhost:8080> erreichbar.
