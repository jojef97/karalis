import "./page.css";

export default function InsightsPage() {
  return (
    <div className="insights-page">
        <h1>Ʃωστό µοντέλο, καµία έκπληξη</h1>
    

    <div className="row">                           {/*CONTROL BY ROW*/}
     <div className="bubbles">

    <div className="bubble">
        <h2>Docs</h2>
        <p className="bubble-summary">Μία πηγή αλήθειας. Ʃχέδια και µοντέλα µε έλεγχο εκδόσεων.</p>
        <p className="bubble-detail">
            Ʃχέδια και µοντέλα µε έλεγχο εκδόσεων. Όλοι, µελετητές,
            εκτιµητές και εργοτάξιο, δουλεύουν πάνω στην τελευταία έκδοση.</p>
     </div>
    
    <div className="bubble">
        <h2>Model Coordination</h2>
        <p className="bubble-summary">Αυτόµατο clash detection σε όλα τα µοντέλα ειδικοτήτων.</p>
        <p className="bubble-detail">
            Τα µοντέλα όλων των ειδικοτήτων, από Revit, IFC, DWG ή
            Navisworks, ανεβαίνουν και ελέγχονται αυτόµατα για συγκρούσεις.
            Τα clashes οµαδοποιούνται ανά σύστηµα ή τύπο στοιχείου,
            χαρακτηρίζονται ως πρόβληµα ή όχι και γίνονται issues µε
            υπεύθυνο και προθεσµία.</p>
    </div>

    </div>
        <div className="row-image">
             <img src="desk.jpg"></img>
        </div>
    </div>

{/*----------------------------SECOND PART--------------------------------------------*/}

<div className="row row-reverse">

  <div className="row-image">
        <img src="program.jpg"></img>
  </div>

  <div className="bubbles">

    <div className="bubble">
        <h2>Takeoff</h2>
        <p className="bubble-summary">Προµέτρηση 2D και 3D µαζί</p>
        <p className="bubble-detail">
            Ποσότητες απευθείας από το µοντέλο και µέτρηση σε σχέδια για
            ό,τι δεν µοντελοποιείται, στο ίδιο περιβάλλον. Οργάνωση µε
            συστήµατα ταξινόµησης, δικούς σας τύπους υπολογισµού και
            εξαγωγή σε Excel για το λογισµικό τιµολόγησης.</p>
    </div>

    <div className="bubble">
        <h2>AI</h2>
        <p className="bubble-summary">Λιγότερη χειροκίνητη δουλειά</p>
        <p className="bubble-detail">
            Η Autodesk έχει προσθέσει λειτουργίες AI, όπως αυτόµατη
            αναγνώριση συµβόλων: σηµειώνεις ένα σύµβολο και το εργαλείο
            βρίσκει και µετράει όλα τα όµοια στο σχέδιο. Υπάρχει και βοηθός
            που απαντά σε ερωτήσεις πάνω στις προδιαγραφές του έργου.
        </p>

    </div>
    </div>
    </div>
    

    <p className="closing-text">
  Το σηµαντικό δεν είναι κάθε εργαλείο µόνο του, αλλά η σύνδεσή τους. Όταν ένα clash λύνεται και το µοντέλο ενηµερώνεται, η νέα έκδοση είναι διαθέσιµη για προµέτρηση χωρίς αρχεία που ταξιδεύουν µε email.
    </p>



{/*----------------------------WORKFLOW STRIP--------------------------------------------*/}

<div className="workflow-section">
  <h2 className="workflow-title">Η ροή εργασίας που προτείνουµε</h2>

  <div className="workflow-grid">
    
    {/* Left Column: Steps 1, 3, 5 */}
    <div className="workflow-col">
      <div className="workflow-bubble wf-bg-1">
        <span className="step-number">1</span>
        <p>Σύνδεση μελετητών και αρχείων σε κοινή πλατφόρμα.</p>
      </div>
      <div className="workflow-bubble wf-bg-3">
        <span className="step-number">3</span>
        <p>Αυτόματος έλεγχος συγκρούσεων (clash detection).</p>
      </div>
      <div className="workflow-bubble wf-bg-5">
        <span className="step-number">5</span>
        <p>Τελική προμέτρηση και εξαγωγή αναφορών.</p>
      </div>
    </div>

    {/* Right Column: Steps 2, 4, 6 */}
    <div className="workflow-col">
      <div className="workflow-bubble wf-bg-2">
        <span className="step-number">2</span>
        <p>Ανέβασμα μοντέλων και σχεδίων (Revit, IFC, DWG).</p>
      </div>
      <div className="workflow-bubble wf-bg-4">
        <span className="step-number">4</span>
        <p>Διαχείριση issues, ανάθεση και επίλυση.</p>
      </div>
      <div className="workflow-bubble wf-bg-6">
        <span className="step-number">6</span>
        <p>Ενημέρωση εργoταξίου σε πραγματικό χρόνο.</p>
      </div>
    </div>
  </div>
</div>

        <div className="closing-text2">
            Η ακρίβεια µιας προµέτρησης από BIM δεν κρίνεται από το
            λογισµικό, αλλά από το πόσο καλά στήθηκε και συντονίστηκε το
            µοντέλο. Το Autodesk Forma και τα εργαλεία AI αφαιρούν τη
            χειροκίνητη δουλειά και συνδέουν τα κοµµάτια. Η γνώση του
            µηχανικού είναι αυτή που µετατρέπει ένα µοντέλο σε προµέτρηση
            που µπορείς να εµπιστευτείς.
        </div>


        <p className="closing-text3">
        Θέλετε αξιόπιστες ποσότητες από το µοντέλο σας;
        Ελέγχουµε το µοντέλο, λύνουµε τα clashes και σας παραδίδουµε προµέτρηση έτοιµη για τιµολόγηση.
        </p>

        <p className="contact">Επικοινωνήστε μαζί μας.</p>
</div>
  
  );

  
}