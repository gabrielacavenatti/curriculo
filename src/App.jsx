import "./App.css";

export default function App() {
  return (
    <div className="cv-container">
      <div className="cv">
        <aside className="sidebar">
          <div className="name-block">
            <h1>
              Gabriela
              <br />
              Cavenatti
            </h1>
            <span>Estudante de Analise e Desenvolvimento de sistemas</span>
          </div>

          <section className="section">
            <h2>SOBRE MIM</h2>
            <p>
              Desenvolvedora em formação com interesse em lógica de sistemas, estruturação de aplicações e banco de dados. Atualmente desenvolvo interfaces com React, JavaScript, HTML e CSS, aplicando conceitos de responsividade, componentização e integração com APIs. Busco evoluir minhas habilidades em desenvolvimento full stack e arquitetura de sistemas.

            </p>
          </section>

          <section className="section">
            <h2>ESCOLARIDADE</h2>

            <div className="item">
              <h3>Analise e Desenvolvimento de Sistemas</h3>
              <span>IFSP | 2025 - Cursando</span>
              <h3>Naturologia</h3>
              <span>Anhembi Morumbi | 2017 - 2020</span>
            </div>
          </section>

          <section className="section">
            <h2>HABILIDADES</h2>

            <div className="item">
              <h3>FRONT-END</h3>
              <p>HTML, CSS, JavaScript e React JS</p>
            </div>

            <div className="item">
              <h3>BANCO DE DADOS</h3>
              <p>MySQL e modelagem de dados</p>
            </div>

            <div className="item">
             <h3>EXCEL E POWER QUERY</h3>
            <span>Automação, tratamento e análise de dados</span>
            </div>

            <div className="item">
              <h3>FERRAMENTAS</h3>
              <span>Git, GitHub, VS Code e Figma</span>
            </div>
          </section>

          <section className="section">
            <h2>IDIOMA</h2>

            <div className="item">
              <p><strong>Inglês</strong> - Intermediario</p>
              <p><strong>Português</strong> - Fluente</p>
            </div>
          </section>

          
        </aside>

        <main className="content">
          <div className="top-info">
            <div>
              <p>+55 11 94062-8748</p>
              <p>gabrielacavenatti.bj@gmail.com</p>
              <p>Bragança Paulista - São Paulo, Brasil</p>
            </div>
          </div>

          <section className="section">
            <h2>EXPERIENCIA</h2>

            <div className="job">
              <h3>AUXILIAR FISCAL</h3>
              <span>Koala Parts | 2024- Atual</span>

              <ul>
                <li>Responsável pela emissão, controle e conferência de notas fiscais (venda, devolução, garantia e produtos inutilizados/perdidos), garantindo a precisão das informações fiscais no sistema.</li>
                <li>Atuação no lançamento de notas fiscais de entrada, realizando registro e validação de compras.</li>
                <li>Participação na atualização e correção de cadastros fiscais, assegurando a integridade dos dados no sistema interno.</li>
                <li>Suporte às rotinas fiscais e administrativas, contribuindo para a organização documental e conformidade dos processos.</li>
               
              </ul>
            </div>

            <div className="job">
              <h3>ANALISTA DE E-COMMERCE E MARKETPLACE</h3>
              <span>Koala Parts | 2021 - Atual</span>

              <ul>
                <li>Gestão de operações em marketplaces como Mercado Livre, Shopee e Magalu (Full), incluindo controle de estoque, integração e atualização de anúncios no sistema.</li>
                <li>Atendimento ao cliente em canais de venda online, com suporte pré e pós-venda.</li>
                <li>Acompanhamento de pedidos, emissão de etiquetas e organização do fluxo de expedição.</li>
                <li>Manutenção e atualização de anúncios não integrados ao sistema, garantindo consistência entre estoque e plataformas de venda.</li>
                
              </ul>
            </div>

            <div className="job">
              <h3>DESENVOLVIMENTO E SUPORTE DE SISTEMAS</h3>
              <span>Projetos Acadêmicos e Estudos | 2025 - Atual</span>

              <ul>
                <li>Desenvolvimento de interfaces web utilizando HTML, CSS,
        JavaScript e React JS.</li>
                <li> Criação e personalização de páginas responsivas
        para projetos acadêmicos e portfólio profissional.</li>
                <li> Organização e manutenção de códigos utilizando Git e GitHub;</li>
                <li> Participação em atividades práticas voltadas
        ao desenvolvimento front-end e experiência do usuário.</li>
                <li>Utilização de Power Query para tratamento,
      transformação e automação de dados.</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}