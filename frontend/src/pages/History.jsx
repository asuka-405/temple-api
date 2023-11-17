import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { NewTemple } from "./edit"

export default function History() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/history")
      .then((response) => response.json())
      .then((data) => {
        setHistory(data)
        console.log(history)
      })
  }, [])

  return (
    <>
      <div className="title">
        <h1 style={{ textDecoration: "underline" }}>History</h1>
      </div>
      <div className="history">
        {history.map((item, index) => (
          <HistoryItem
            key={index}
            method={item.method}
            path={item.path}
            timestamp={item.timestamp}
          />
        ))}

        <HistoryItem
          method="GET"
          path="/api/data"
          timestamp="2021-10-12 12:00:00"
        />
      </div>
      <NewTemple />
    </>
  )
}

function HistoryItem({ method, path, timestamp }) {
  return (
    <div className="history-item">
      <div className="history-method">Method: {method}</div>
      <div className="history-path">API Route: {path}</div>
      <div className="history-timestamp">Timestamp: {timestamp}</div>
    </div>
  )
}

export function HistoryButton() {
  return (
    <Link to="/history">
      <span className="history-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80"
          width="50px"
          height="50px"
        >
          <path
            d="M 40 7 C 31.401818 7 23.56696 10.300256 17.693359 15.693359 L 15 13 L 13 22 L 22 20 L 19.109375 17.109375 C 24.62126 12.075395 31.94257 9 40 9 C 57.132552 9 71 22.867448 71 40 C 71 57.132552 57.132552 71 40 71 C 22.867448 71 9 57.132552 9 40 C 9 36.833816 9.4731426 33.78273 10.353516 30.908203 A 1.0001 1.0001 0 1 0 8.4414062 30.322266 C 7.5037786 33.383739 7 36.634184 7 40 C 7 58.213448 21.786552 73 40 73 C 58.213448 73 73 58.213448 73 40 C 73 21.786552 58.213448 7 40 7 z M 40 11 A 2 2 0 0 0 38 13 A 2 2 0 0 0 40 15 A 2 2 0 0 0 42 13 A 2 2 0 0 0 40 11 z M 33.019531 12.919922 A 1 1 0 0 0 32.949219 12.921875 A 1 1 0 0 0 32.751953 12.955078 A 1 1 0 0 0 32.044922 14.179688 A 1 1 0 0 0 33.269531 14.886719 A 1 1 0 0 0 33.976562 13.662109 A 1 1 0 0 0 33.019531 12.919922 z M 46.978516 12.921875 A 1 1 0 0 0 46.021484 13.664062 A 1 1 0 0 0 46.728516 14.888672 A 1 1 0 0 0 47.953125 14.181641 A 1 1 0 0 0 47.246094 12.955078 A 1 1 0 0 0 46.978516 12.921875 z M 26.474609 15.617188 A 1 1 0 0 0 25.998047 15.751953 A 1 1 0 0 0 25.632812 17.117188 A 1 1 0 0 0 26.998047 17.482422 A 1 1 0 0 0 27.365234 16.117188 A 1 1 0 0 0 26.474609 15.617188 z M 53.451172 15.621094 A 1 1 0 0 0 52.630859 16.119141 A 1 1 0 0 0 52.998047 17.486328 A 1 1 0 0 0 54.363281 17.119141 A 1 1 0 0 0 53.998047 15.753906 A 1 1 0 0 0 53.451172 15.621094 z M 40 17 A 1 1 0 0 0 39 18 A 1 1 0 0 0 40 19 A 1 1 0 0 0 41 18 A 1 1 0 0 0 40 17 z M 59.105469 19.908203 A 1 1 0 0 0 58.382812 20.201172 A 1 1 0 0 0 58.382812 21.615234 A 1 1 0 0 0 59.796875 21.615234 A 1 1 0 0 0 59.796875 20.201172 A 1 1 0 0 0 59.105469 19.908203 z M 47.191406 21.310547 L 40.650391 36.066406 C 40.437414 36.030889 40.222534 36 40 36 C 37.802706 36 36 37.802706 36 40 C 36 42.197294 37.802706 44 40 44 C 40.737498 44 41.422226 43.784562 42.017578 43.431641 L 50.435547 51.849609 L 51.849609 50.435547 L 43.431641 42.017578 C 43.784562 41.422226 44 40.737498 44 40 C 44 38.739536 43.395226 37.621684 42.474609 36.886719 L 49.019531 22.121094 L 47.191406 21.310547 z M 63.355469 25.5 A 1 1 0 0 0 62.878906 25.632812 A 1 1 0 0 0 62.513672 27 A 1 1 0 0 0 63.878906 27.365234 A 1 1 0 0 0 64.246094 26 A 1 1 0 0 0 63.355469 25.5 z M 66.085938 32.011719 A 1 1 0 0 0 66.015625 32.013672 A 1 1 0 0 0 65.818359 32.046875 A 1 1 0 0 0 65.111328 33.271484 A 1 1 0 0 0 66.335938 33.978516 A 1 1 0 0 0 67.042969 32.753906 A 1 1 0 0 0 66.085938 32.011719 z M 13.910156 32.013672 A 1 1 0 0 0 12.953125 32.755859 A 1 1 0 0 0 13.660156 33.980469 A 1 1 0 0 0 14.884766 33.273438 A 1 1 0 0 0 14.177734 32.046875 A 1 1 0 0 0 13.910156 32.013672 z M 13 38 A 2 2 0 0 0 11 40 A 2 2 0 0 0 13 42 A 2 2 0 0 0 15 40 A 2 2 0 0 0 13 38 z M 40 38 C 41.116414 38 42 38.883586 42 40 C 42 41.116414 41.116414 42 40 42 C 38.883586 42 38 41.116414 38 40 C 38 38.883586 38.883586 38 40 38 z M 67 38 A 2 2 0 0 0 65 40 A 2 2 0 0 0 67 42 A 2 2 0 0 0 69 40 A 2 2 0 0 0 67 38 z M 18 39 A 1 1 0 0 0 17 40 A 1 1 0 0 0 18 41 A 1 1 0 0 0 19 40 A 1 1 0 0 0 18 39 z M 62 39 A 1 1 0 0 0 61 40 A 1 1 0 0 0 62 41 A 1 1 0 0 0 63 40 A 1 1 0 0 0 62 39 z M 13.927734 45.986328 A 1 1 0 0 0 13.857422 45.988281 A 1 1 0 0 0 13.660156 46.021484 A 1 1 0 0 0 12.953125 47.246094 A 1 1 0 0 0 14.177734 47.953125 A 1 1 0 0 0 14.884766 46.728516 A 1 1 0 0 0 13.927734 45.986328 z M 66.068359 45.992188 A 1 1 0 0 0 65.113281 46.734375 A 1 1 0 0 0 65.820312 47.958984 A 1 1 0 0 0 67.044922 47.251953 A 1 1 0 0 0 66.337891 46.027344 A 1 1 0 0 0 66.068359 45.992188 z M 16.591797 52.498047 A 1 1 0 0 0 16.117188 52.632812 A 1 1 0 0 0 15.75 53.998047 A 1 1 0 0 0 17.117188 54.363281 A 1 1 0 0 0 17.482422 52.998047 A 1 1 0 0 0 16.591797 52.498047 z M 63.332031 52.501953 A 1 1 0 0 0 62.513672 53.001953 A 1 1 0 0 0 62.878906 54.367188 A 1 1 0 0 0 64.246094 54.001953 A 1 1 0 0 0 63.878906 52.634766 A 1 1 0 0 0 63.332031 52.501953 z M 20.921875 58.091797 A 1 1 0 0 0 20.201172 58.384766 A 1 1 0 0 0 20.201172 59.798828 A 1 1 0 0 0 21.615234 59.798828 A 1 1 0 0 0 21.615234 58.384766 A 1 1 0 0 0 20.921875 58.091797 z M 59.105469 58.091797 A 1 1 0 0 0 58.382812 58.384766 A 1 1 0 0 0 58.382812 59.798828 A 1 1 0 0 0 59.796875 59.798828 A 1 1 0 0 0 59.796875 58.384766 A 1 1 0 0 0 59.105469 58.091797 z M 40 61 A 1 1 0 0 0 39 62 A 1 1 0 0 0 40 63 A 1 1 0 0 0 41 62 A 1 1 0 0 0 40 61 z M 53.474609 62.380859 A 1 1 0 0 0 52.998047 62.513672 A 1 1 0 0 0 52.630859 63.880859 A 1 1 0 0 0 53.998047 64.246094 A 1 1 0 0 0 54.363281 62.880859 A 1 1 0 0 0 53.474609 62.380859 z M 26.449219 62.384766 A 1 1 0 0 0 25.630859 62.882812 A 1 1 0 0 0 25.996094 64.25 A 1 1 0 0 0 27.363281 63.882812 A 1 1 0 0 0 26.996094 62.517578 A 1 1 0 0 0 26.449219 62.384766 z M 40 65 A 2 2 0 0 0 38 67 A 2 2 0 0 0 40 69 A 2 2 0 0 0 42 67 A 2 2 0 0 0 40 65 z M 33 65.080078 A 1 1 0 0 0 32.042969 65.822266 A 1 1 0 0 0 32.75 67.046875 A 1 1 0 0 0 33.974609 66.339844 A 1 1 0 0 0 33.267578 65.115234 A 1 1 0 0 0 33 65.080078 z M 47.023438 65.080078 A 1 1 0 0 0 46.726562 65.113281 A 1 1 0 0 0 46.019531 66.337891 A 1 1 0 0 0 47.244141 67.044922 A 1 1 0 0 0 47.951172 65.820312 A 1 1 0 0 0 47.023438 65.080078 z"
            fill="#FF7F50"
          />
        </svg>
      </span>
    </Link>
  )
}
