export default function TechStack() {
  return (
    <>
      <style>{`
        .techstack-section .section-title {
          margin-bottom: 48px;
        }

        .ts-groups {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .ts-group-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(212,168,67,0.5);
          margin-bottom: 14px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(212,168,67,0.1);
        }

        .ts-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .ts-item {
          background: linear-gradient(145deg, var(--black-card) 0%, var(--black-raised) 100%);
          border: 1px solid rgba(212,168,67,0.12);
          border-radius: var(--radius);
          padding: 16px 8px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .ts-item:hover {
          transform: translateY(-4px);
          border-color: rgba(212,168,67,0.35);
        }

        .ts-item img {
          width: 38px;
          height: 38px;
          object-fit: contain;
        }

        .ts-item span {
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.03em;
          text-align: center;
        }

        .ts-capcut-logo {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, #000, #69C9D0, #EE1D52);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 900;
          color: #fff;
          letter-spacing: -1px;
        }

        @media (max-width: 900px) {
          .ts-grid { grid-template-columns: repeat(4, 1fr); }
        }

        @media (max-width: 560px) {
          .ts-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <section className="section techstack-section" id="techstack">
        <p className="section-label">Tools & Technologies</p>
        <h2 className="section-title">TECH<br />STACK</h2>

        <div className="ts-groups">

          {/* Creative & Design */}
          <div>
            <p className="ts-group-label">Creative & Design</p>
            <div className="ts-grid">
              <div className="ts-item">
                <img src="/icons/photoshop.svg" alt="Photoshop" />

                <span>Photoshop</span>
              </div>
              
              <div className="ts-item">
                <img src="/icons/figma.svg" alt="Figma" />
                <span>Figma</span>
              </div>
              <div className="ts-item">
                <img src="/icons/canva.png" alt="Canva" />
                <span>Canva</span>
              </div>
              <div className="ts-item">
                <img
                  src="/icons/lightroom.svg"
                  alt="Lightroom"
                />
                <span>Lightroom</span>
              </div>
            </div>
          </div>

          {/* Video & Motion */}
          <div>
            <p className="ts-group-label">Video & Motion</p>
            <div className="ts-grid">
              
              <div className="ts-item">
                <img
                src="/icons/Capcut.png"
                alt="CapCut"
                 />
                <span>CapCut</span>
              </div>
              <div className="ts-item">
                <img
                src="/icons/vn.png"
                alt="VN"
                 />
                <span>VN</span>
              </div>
            </div>
          </div>

          {/* Development */}
          <div>
            <p className="ts-group-label">Development</p>
            <div className="ts-grid">
              <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                <span>HTML5</span>
              </div>
              <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                <span>CSS3</span>
              </div>
              <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                <span>TypeScript</span>
              </div>
              <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <span>React</span>
              </div>
              <div className="ts-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                />
                <span>Next.js</span>
              </div>
              <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                <span>Python</span>
              </div>
              <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                <span>Java</span>
                </div>
                <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
                <span>C</span>
                </div>
                <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                <span>C++</span>
              </div>
              <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                <span>MySQL</span>
              </div>
              <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <span>MongoDB</span>
                </div>
                <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                <span>PHP</span>
                </div>
                <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                <span>Node.js</span>
                </div>
                <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
                <span>Bootstrap</span>
              </div>
              <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                <span>Tailwind CSS</span>
                </div>
              <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                <span>Git</span>
              </div>
              <div className="ts-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
                <span>VS Code</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}