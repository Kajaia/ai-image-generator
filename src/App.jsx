import { useEffect, useState } from "react";
import { baseUrl, headers } from "./services/api";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("dall-e-3");
  const [n, setN] = useState(1);
  const [quality, setQuality] = useState("standard");
  const [responseFormat, setResponseFormat] = useState("url");
  const [size, setSize] = useState("1024x1024");
  const [style, setStyle] = useState("vivid");

  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {}, []);

  const generate = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${baseUrl}/images/generations`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          prompt,
          model,
          n,
          quality,
          response_format: responseFormat,
          size,
          style,
        }),
      });

      if (!res.ok)
        throw new Error("Can't generate image right now, try again later.");

      const { data } = await res.json();

      if (data) setImageData(data[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="card rounded-3">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-12 col-md-5 col-lg-4">
                  <form onSubmit={(e) => generate(e)}>
                    <div>
                      <h2 className="fs-6 text-center mb-3">
                        Create an image from text prompt
                      </h2>
                      <textarea
                        className="form-control rounded-3"
                        placeholder="Describe what you'd like to generate"
                        minLength={3}
                        maxLength={4000}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        required
                      ></textarea>
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill w-100 mt-2"
                        disabled={loading}
                      >
                        {loading ? "Generating image..." : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-12 col-md-7 col-lg-8">
                  {imageData && imageData?.url && (
                    <div>
                      <img
                        width="100%"
                        height="100%"
                        className="rounded-3"
                        src={imageData?.url}
                        alt="Generated image"
                      />
                      <p className="mt-3 mb-0">{imageData?.revised_prompt}</p>
                      <a
                        className="btn btn-success rounded-pill w-100 mt-3"
                        href={imageData?.url}
                        target="_blank"
                        download
                      >
                        Download image
                      </a>
                    </div>
                  )}
                  {!imageData && !imageData?.url && (
                    <div
                      className="w-100 bg-secondary rounded-3"
                      style={{ height: 500 }}
                    ></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
