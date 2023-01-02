import "./App.css";
import CoverPageBuild from "./CoverPageBuild";
import ResumeBuild from "./ResumeBuild";

function App() {
  function PrintCover() {
    let currentTitle = document.title;
    document.getElementById("resumePage").classList.add("noPrint");
    document.getElementById("coverPage").classList.remove("noPrint");
    document.title = currentTitle + "_Travis Heidelberger_CoverLetter";
    window.print();
    document.title = currentTitle;
  }

  function PrintResume() {
    let currentTitle = document.title;
    document.getElementById("resumePage").classList.remove("noPrint");
    document.getElementById("coverPage").classList.add("noPrint");
    document.title = currentTitle + "_Travis Heidelberger_Resume";
    window.print();
    document.title = currentTitle;
  }

  function PrintBoth() {
    let currentTitle = document.title;
    document.getElementById("resumePage").classList.remove("noPrint");
    document.getElementById("coverPage").classList.remove("noPrint");
    document.title = currentTitle + "_Travis Heidelberger_Resume_CoverLetter";
    window.print();
    document.title = currentTitle;
  }

  return (
    <div className="App">
      <button className="ml-96 noPrint mt-8 border bg-cyan-800 text-white px-8 py-1 rounded-lg uppercase text-base" id="printButton" onClick={PrintBoth}>
        Print Both
      </button>
      <div id="coverPage">
        <CoverPageBuild />
      </div>
      <button className="ml-96 noPrint mb-12 border bg-cyan-800 text-white px-8 py-1 rounded-lg uppercase text-base" id="printButton" onClick={PrintCover}>
        Print Cover
      </button>
      <div id="resumePage">
        <ResumeBuild />
      </div>
      <button className="ml-96 mb-8 noPrint border bg-cyan-800 text-white px-8 py-1 rounded-lg uppercase text-base" id="printButton" onClick={PrintResume}>
        Print Resume
      </button>
    </div>
  );
}

export default App;
