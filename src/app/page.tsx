export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-8 prose prose-sm prose-gray">
        {/* Header Section */}
        <div className="bg-[#98FFD7] p-6 rounded-lg mb-8 flex items-center gap-8">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-white"
          />
          <div>
            <h1 className="text-2xl font-bold mb-1">Ling Fan</h1>
            <div className="space-y-1 text-base">
              <p>Professor and PhD Advisor, Tongji University</p>
              <p>Founding Director, Tongji Design Artificial Intelligence Lab</p>
              <p className="text-[#98FFD7]">fl@tezign.com</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
          {/* Left Column - Highlights and Summary */}
          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-bold mb-3">Career Highlights</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Founder & CEO of Tezign, leading AI-driven design innovation</p>
                <p>• Professor and PhD Advisor at Tongji University</p>
                <p>• Young Global Leader & Cultural Leader, World Economic Forum</p>
                <p>• Harvard Design Doctor with expertise in AI and Design</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">Fields of Expertise</h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Artificial Intelligence for Design</li>
                <li>Human-Computer Interaction</li>
                <li>Artificial Intelligence for Business Innovation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">Education</h2>
              <div className="space-y-2">
                <div className="text-sm text-gray-700">
                  <p>2011–14 Doctor of Design, Harvard University, USA</p>
                  <p>2005–07 Master of Architecture, Princeton University, USA</p>
                  <p>2000–05 Bachelor of Architecture, Tongji University, China</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-bold mb-3">Academic Appointments</h2>
              <div className="space-y-1 text-sm text-gray-700">
                <p>2016– Professor, Ph.D. Advisor, College of Design and Innovation, Tongji University, China</p>
                <p>2016– Founding Director, Design Artificial Intelligence Lab, Tongji University, China</p>
                <p>2013–15 Lecturer, University of California, Berkeley, USA</p>
                <p>2012–13 Teaching Fellow, Harvard Graduate School of Design, USA</p>
                <p>2007–11 Lecturer, Central Academy of Fine Arts, China</p>
                <p>2007–10 China Fellow, Princeton Center for Architecture, Urbanism, and Infrastructure, USA</p>
                <p>2008 Visiting Lecturer, Oslo School of Architecture and Design, Norway</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">Professional Appointments</h2>
              <div className="space-y-1 text-sm text-gray-700">
                <p>2015– Founder & CEO, Tezign (Shanghai) Information Technology Co., Ltd.</p>
                <p>2024– Board Member, YouChange Rural Revitalization Foundation</p>
                <p>2024– Chairman, CEIBS x Tezign AI and Business Innovation Initiative</p>
                <p>2023– Deputy Director, Design Media Committee, Shanghai Artificial Intelligence Association</p>
                <p>2022– Chief Expert, National Industrial Design Center</p>
                <p>2020– Board Member, Youth Council of the Future Science Forum</p>
                <p>2018– Board Member, Yunqi Academy of Engineering</p>
                <p>2019– Member, IEEE Council for Extended Intelligence</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">Research Grants</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p>"Research on the Evolution of Design Tools in the Era of Artificial Intelligence", National Social Science Fund General Project (24BG140, 2024–27)</p>
                <p>"Trends in Art and Design Practices in the Context of Artificial Intelligence", Ministry of Education Humanities and Social Sciences General Project (20YJA760011, 2020–23)</p>
                <p>"Research and Application of Multimodal Digital Asset Management Based on High-Quality Industrial Corpora", Shanghai Industrial High-Quality Development Special Fund (RZ-RGZN-01-24-0509, 2024–25)</p>
                <p>"New Design Capabilities: Building an AIGC Competence Development Platform for the Design Industry", Shanghai Cultural and Creative Industry Development Fund (2024010657, 2024)</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
