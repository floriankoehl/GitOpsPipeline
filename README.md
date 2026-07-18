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

Die bereits gebaute Anwendung im Ordner `dist` wird direkt von Nginx ausgeliefert.

```bash
docker build -t florian-koehl-cv .
docker run --rm -p 8080:80 florian-koehl-cv
```

Die Anwendung ist anschließend unter <http://localhost:8080> erreichbar.

Nach Änderungen an der React-App muss `dist` vor dem Commit neu gebaut werden:

```bash
npm ci
npm run build
```
