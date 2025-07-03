# Exercise Base SoSe 2025

Dieses Projekt dient als Basis für die Programmieraufgabe im Sommersemester
2025.

## Setup

### 1. Klonen Sie sich dieses Repository

Kopieren Sie sich den Link zum Klonen über die Auswahl "HTTPS" im
Dropdown-Dialog unter "<> Code" (dicker, grüner Button).

Führen Sie in Ihrem Arbeitsverzeichnis folgenden Befehl im Terminal aus:

`git clone KOPIERTER_LINK_HIER`

Dieser Befehl "klont" das Repository und erzeugt ein Verzeichnis mit dem Namen
"exercise-base-2025" in dem Verzeichnis, in dem Sie den Befehl ausführen.

### 2. Installieren Sie sich die Abhängigkeiten des Projekts

Wechseln Sie in das geklonte Verzeichnis und führen Sie folgenden Befehl aus:

`deno install`

### 3. Starten Sie die Anwendung zur Bearbeitung der Aufgaben im "watch"-Mode

Um die Anwendung zu starten und gleichzeitig alle Berechtigungen und den
"watch"-Mode zu aktiviern, führen Sie noch diesen Befehl aus:

`deno --allow-all --watch server.js`

Dies Startet den Server und lädt die Anwendung neu, wenn sich die Dateien im
Verzeichnis ändern. Dieser laufende Prozess kann mit der Tastenkombination
"Strg+c" bzw. "Ctrl+c" beendet werden.

