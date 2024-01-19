# wheel-and-cross-mw
Gra w kółko i krzyrzyk.


OPIS SKRYPTU:


Funkcja setInterval zwiększa wartość czasu co sekunde oraz aktualizuje czas na stronie w czasie rzeczywistym.

Funkcja strzałkowa getAnswers zbiera wartości gracza z gry sprawdzając wszystkie elementy `td` a następnie zapisuje wartości do tablicy, którą zwraca.

Funckja playerWin sprawdza kombinacje i nastepnie zwraca który gracz wygrał.

Funkcja softReset restartuje plansze po zakonczonej grze.

Funkcja drawStarter losuje liczbe od w przedziale 0-10 i losuje gracza który rozpocznie rozgrywkę.

Funckja click na początku sprawdza czy dane pole jest już kliknięte czy nie, jeżeli nie jest wtedy sprawdza czyja jest akutalnie kolej. I na sam koniec sprawdza kto jest wygranym i zapisuje dane o wygranym do inputa oraz wykonuje funkcje softReset.