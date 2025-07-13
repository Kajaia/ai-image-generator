import { useEffect, useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("dall-e-3");
  const [n, setN] = useState(1);
  const [quality, setQuality] = useState("standard");
  const [responseFormat, setResponseFormat] = useState("url");
  const [size, setSize] = useState("1024x1024");
  const [style, setStyle] = useState("vivid");

  useEffect(() => {}, []);

  const generate = async (e) => {
    e.preventDefault();

    console.log("Image generated");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="card rounded-3">
            <div className="card-body">
              <div className="row">
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
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-12 col-md-7 col-lg-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam nulla quae obcaecati, quod nihil iusto recusandae
                  laudantium possimus tempora. Praesentium numquam quos earum
                  incidunt laudantium molestiae voluptates sunt pariatur
                  reiciendis!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
