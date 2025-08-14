// ------------------ CONFIG ------------------
const tests = {'practice-test-1': [
      {
        question: "Which of the following cholinesterase inhibitors is used in the diagnosis of Myasthenia Gravis(MG)?",
        options: ["Neostigmine", "Physostigmine", "Edrophonium", "Pyridostigmine"],
        correct: 2
      },
      {
        question: "Atropine poisoning would be antagonized by:",
        options: ["Pralidoxime", "Neostigmine", "Cyclopentolate", "Physostigmine"],
        correct: 3
      },
      {
        question: "The selective β–2 sympathomimetic drugs differ from epinephrine in all of the following EXCEPT:",
        options: ["They are active when administered orally", "They have slower onset of action", "They have shorter duration of action", "Generally they do not stimulate the myocardium directly"],
        correct: 2
      },
      {
        question: "The sympathetic effect with the β3 adrenoceptors is:",
        options: ["Increased lipolysis", "Peripheral vasoconstriction", "Increased heart rate and blood pressure", "Bronchial dilatation and coronary dilation"],
        correct: 0
      },
      {
        question: "The bladder trigone and prostatic muscles are relaxed by:",
        options: ["Adrenergic a-1 agonists", "Adrenergic a-1 antagonists", "Adrenergic a-2 agonists", "Adrenergic a-2 antagonists"],
        correct: 1
      },
      {
        question: "Which of the following sympatholytic drugs that is α-1 selective blocker whose adverse effects include postural hypotension particularly in the beginning?",
        options: ["Tolazoline", "Prazosin", "Phentolamine", "Phenoxybenzamine"],
        correct: 1
      },
      {
        question: "Which of the following agonists would be used for asthma patients or to delay premature labor?",
        options: ["β2-agonist", "β1-agonist", "α1-agonist", "α2-agonist"],
        correct: 0
      },
      {
        question: "All of the following are primary effect of stimulating muscarinic actions of cholinergic agonists EXCEPT:",
        options: ["Release of nitric oxide (vasodilation)", "Iris contraction (miosis)", "Ciliary muscle contraction and accommodation of the lens (near vision)", "Bronchi dilation and decreased bronchiole secretions"],
        correct: 3
      },
      {
        question: "Which of the following is NOT a muscarinic actions of cholinergic agonist drug?",
        options: ["Tachycardia, increased conduction velocity", "Increased GI tract tone and secretions", "Diaphoresis from sweat glands", "Contraction of urinary detrussor muscle and relaxation of urinary sphincter"],
        correct: 0
      },
      {
        question: "What type of drugs are atropine, scopolamine, and pirenzepine?",
        options: ["Acetylcholine agonists", "Acetylcholinesterase inhibitors", "Muscarinic agonists", "Muscarinic antagonists"],
        correct: 3
      },
      {
        question: "Which of the following reversible anticholinesterase (AchE) is used for atropine intoxication?",
        options: ["Neostigmine", "Physostigmine", "Edrophonium", "Donepezil"],
        correct: 1
      },
      {
        question: "All of the following are irreversible cholinesterase inhibitors EXCEPT",
        options: ["Tacrine", "Echothiophate", "Parathion", "Malathion"],
        correct: 0
      },
      {
        question: "Which of the following is NOT an effect of autonomic ganglion blocking?",
        options: ["Xerostomia", "Mydriasis", "Cycloplegia", "Hypertension"],
        correct: 3
      },
      {
        question: "Which of the following is indirect acting carbamates cholinomimetic with poor lipid solubility and a duration of action of about 2–4 hours?",
        options: ["Betanechol", "Physostigmine", "Pilocarpine", "Neostigmine"],
        correct: 3
      },
      {
        question: "Which of the following agents is a prodrug that is much less toxic in mammal than insects?",
        options: ["Echothiophate", "Parathion", "Malathion", "Sarin"],
        correct: 2
      },
      {
        question: "Which one of the following antimuscarinic agents does NOT cause cycloplegia when used topically in the eye?",
        options: ["Atropine", "Cyclopentolate", "Tropicamide", "Physostigmine"],
        correct: 3
      },
      {
        question: "Which of the following beta blocker that has an additional a–1 blocking and vasodilator properties?",
        options: ["Acebutolol", "Propranolol", "Carvedilol", "Metoprolol"],
        correct: 2
      },
      {
        question: "Which of the following ultrashort acting cardioselective β–blocker given by IV infusion?",
        options: ["Esmolol", "Bisoprolol", "Timolol", "Sotalol"],
        correct: 0
      }
    ],
    'practice-test-2': [
      {
        question: "Anticholinesterase drugs do NOT produce:",
        options: ["Bradycardia, no change or modest fall in blood pressure", "Increased strength of muscle contraction, especially in muscles weakened by myasthenia gravis", "Miosis and reduction of intraocular pressure", "Rise in BP and tachycardia"],
        correct: 3
      },
      {
        question: "Characteristics of pilocarpine include all of the following EXCEPT:",
        options: ["It is a tertiary amine alkaloid", "It causes miosis and a decrease in intraocular pressure", "Causes a decrease in secretory and motor activity of gut", "It is useful in the treatment of glaucoma"],
        correct: 2
      },
      {
        question: "Which of the following cholinomimetics is most widely used for paralytic ileus and atony of the urinary bladder?",
        options: ["Lobeline", "Neostigmine", "Pilocarpine", "Echothiophate"],
        correct: 1
      },
      {
        question: "Which of the following reversible anticholinesterase, longer acting, penetrates the blood-brain barrier used to treat post-op ileus, urinary retention and reversal of NMJ blockade?",
        options: ["Physostigmine", "Edrophonium", "Neostigmine", "Pyridostigmine"],
        correct: 0
      },
      {
        question: "Which of the following drugs is used for acute toxic effects of organophosphate cholinesterase inhibitors such as sarin or soman nerve agents?",
        options: ["Atropine", "Pilocarpine", "Pralidoxime", "Edrophonium"],
        correct: 2
      },
      {
        question: "Which of the following agents is a ganglion-blocking drug?",
        options: ["Homatropine", "Hexamethonium", "Methscopolamine", "Edrophonium"],
        correct: 1
      },
      {
        question: "Which of the following antimuscarinic drugs is often effective in preventing or reversing vestibular disturbances, especially motion sickness?",
        options: ["Atropine", "Ipratropium", "Scopolamine", "Homatropine"],
        correct: 2
      },
      {
        question: "Atropine is frequently used prior to administration of inhalant anesthetics as premedication to reduce:",
        options: ["Muscle tone", "Secretions", "Nausea and vomiting", "All of the above"],
        correct: 1
      },
      {
        question: "Which of the following drugs is useful in the treatment of Parkinson's disease?",
        options: ["Benztropine", "Edrophonium", "Succinylcholine", "Trimetaphan"],
        correct: 0
      },
      {
        question: "Which of the following antimuscarinic drug, which is used as a mydriatic?",
        options: ["Pilocarpine", "Neostigmine", "Homatropine", "Ipratropium"],
        correct: 2
      },
      {
        question: "Contraindications to the use of antimuscarinic drugs are all of the following EXCEPT:",
        options: ["Glaucoma", "Myasthenia", "Bronchial asthma", "Paralytic ileus and atony of the urinary bladder"],
        correct: 2
      },
      {
        question: "Which of the following agents is a short-acting ganglion blocker, poorly lipid soluble, inactive orally and has short half life?",
        options: ["Homatropine", "Trimethaphan", "Hexamethonium", "Pancuronium"],
        correct: 2
      },
      {
        question: "Which of the following effects is related to direct β1-adrenoreceptor stimulation?",
        options: ["Bronchodilation", "Vasodilatation", "Tachycardia", "Bradycardia"],
        correct: 2
      },
      {
        question: "The distribution of α- adrenoreceptor subtypes is associated with all of the following tissues except those of:",
        options: ["Heart", "Blood vessels", "Prostate", "Pupillary dilator muscle"],
        correct: 0
      },
      {
        question: "β adrenoreceptor subtypes is contained in all of the following tissues EXCEPT:",
        options: ["Bronchial muscles", "Heart", "Pupillary dilator muscle", "Fat cells"],
        correct: 2
      },
      {
        question: "In which of the following tissues both α and β1 adrenergic stimulation produces the same effect?",
        options: ["Blood vessels", "Intestine", "Uterus", "Bronchial muscles"],
        correct: 1
      },
      {
        question: "Which of the following selective β2 agonist drugs causes bronchodilation without significant cardiac stimulation?",
        options: ["Isoprenaline", "Terbutaline", "Xylometazoline", "Methoxamine"],
        correct: 1
      }
    ],
    'practice-test-3': [
      {
        question: "Which of the following statements regarding adrenergic drugs is NOT correct?",
        options: ["Epinephrine acts on both α- and β-receptors", "Norepinephrine has a predominantly β action", "Methoxamine has a predominantly α action", "Isoprenaline has a predominantly β action"],
        correct: 1
      },
      {
        question: "Which of the following direct-acting sympathomimetic drugs is a relatively pure alpha agonist, an effective mydriatic and decongestant and can be used to increase blood pressure?",
        options: ["Epinephrine", "Norepinephrine", "Phenylephrine", "Ephedrine"],
        correct: 2
      },
      {
        question: "Characteristics of a non-catecholamine EXCEPT:",
        options: ["It is a potent selective beta 2 agonist", "It causes uterine relaxation", "It stimulates heart rate, contractility and cardiac output", "It is used in the therapy of asthma"],
        correct: 2
      },
      {
        question: "Which of the following alpha adrenergic blocker, which binds covalently to alpha receptors, causing irreversible blockade of long duration (14–48 hours or longer):",
        options: ["Phentolamine", "Phenoxybenzamine", "Ergotamine", "Prazosin"],
        correct: 1
      },
      {
        question: "β–blockers metoprolol, bisoprolol and atenolol:",
        options: ["Are beta1-selective antagonists", "Are nonselective beta antagonists", "Have intrinsic sympathomimetic activity", "Have an anesthetic action"],
        correct: 0
      },
      {
        question: "Which of the following drugs is a nonselective beta-blocker without intrinsic sympathomimetic or local anesthetic activity and used for the treatment of life-threatening ventricular arrhythmias?",
        options: ["Propranolol", "Metoprolol", "Sotalol", "Atenolol"],
        correct: 2
      },
      {
        question: "The single most important antidote for cholinomimetic overdose is:",
        options: ["Pralidoxime", "Pilocarpine", "Atropine", "Succinylcholine"],
        correct: 2
      },
      {
        question: "Which of the following agents acts by promoting reactivation of phosphorylation acetylcholinesterase?",
        options: ["Pralidoxime", "Atropine", "Pilocarpine", "Neostigmine"],
        correct: 0
      },
      {
        question: "The M2 cholinergic receptor type is primarily located in what organ?",
        options: ["Heart", "Glands", "Smooth muscle", "Endothelium"],
        correct: 0
      },
      {
        question: "Which of the following receptor mediate vasodilation in the coronary, renal and mesenteric vessels?",
        options: ["D1", "β1", "α-1", "α-2"],
        correct: 0
      },
      {
        question: "The major mechanism for inactivation of neurotransmitter released at postganglionic parasympathetic nerve endings is:",
        options: ["Enzymatic degradation of MAO", "Reuptake into nerve endings", "Enzymatic degradation of COMT", "Enzymatic degradation of acetylcholinesterase"],
        correct: 3
      },
      {
        question: "Which of the following cholinomimetics activates both muscarinic and nicotinic receptors?",
        options: ["Bethanechol", "Pilocarpine", "Nicotine", "Lobeline"],
        correct: 2
      },
      {
        question: "Acetylcholine is NOT a specific neurotransmitter at:",
        options: ["Sympathetic preganglionic neuron", "Sympathetic postganglionic nerve endings", "Parasympathetic preganglionic neuron", "Parasympathetic postganglionic nerve endings"],
        correct: 1
      },
      {
        question: "Nicotinic acetylcholine receptors involve the movement of what ion across the cell membrane?",
        options: ["K+", "Ca++", "Cl-", "Na+"],
        correct: 3
      },
      {
        question: "Which of the following drugs inhibits the uptake and storage of norepinephrine by the storage vesicles?",
        options: ["Guanethidine", "Metyrosine", "Reserpine", "Botulinum toxin"],
        correct: 2
      },
      {
        question: "Acetylcholine binds to what muscarinic receptor leading to the IP3/DAG cascade in smooth muscle and glands?",
        options: ["M1 receptor", "M2 receptor", "M3 receptor", "M4 receptor"],
        correct: 2
      }
    ],
    'practice-test-4': [
      {
        question: "What muscarinic receptor inhibits adenylyl cyclase in the heart and intestines?",
        options: ["M1 receptor", "M2 receptor", "M3 receptor", "M4 receptor"],
        correct: 1
      },
      {
        question: "Adrenergic α-2 receptors ___ adenylyl cyclase and β receptors ___ adenylyl cyclase.",
        options: ["Stimulate; Stimulate", "Stimulate; Inhibit", "Inhibit; Inhibit", "Inhibit; Stimulate"],
        correct: 3
      },
      {
        question: "Which of the following statement about the sympathetic nervous system is incorrect?",
        options: ["Innervation of vascular smooth muscle", "Involves fight and fright functions", "Has nicotinic receptors on cell bodies of all postganglionic neurons", "Target organs have adrenoceptors for norepinephrine"],
        correct: 2
      },
      {
        question: "Preganglionic sympathetic and parasympathetic fibers release ____, postganglionic parasympathetic fibers release ____ for muscarinic cholinergic receptors, and postganglionic sympathetic fibers release ____ for adrenergic receptors.",
        options: ["ACh; ACh; NE", "ACh; NE; ACh", "NE; ACh; NE", "NE; NE; ACh"],
        correct: 0
      },
      {
        question: "Which of the following adrenergic receptors is most commonly found pre-synaptic?",
        options: ["α1", "α2", "β1", "β2"],
        correct: 1
      },
      {
        question: "What amino acids is converted into catecholamines (Norepinephrine, Epinephrine, Dopamine)?",
        options: ["Alanine", "Valine", "Lysine", "Tyrosine"],
        correct: 3
      },
      {
        question: "Norepinephrine transporter (NET) can be inhibited by what drug(s) resulting in increase neurotransmitter activity in the synaptic cleft?",
        options: ["Metyrosine", "Reserpine", "Guanethidine and Bretylium", "TCA and Cocaine"],
        correct: 3
      },
      {
        question: "Which of following β-adrenergic blocking drugs with α-blocking effect?",
        options: ["Carvedilol", "Labetalol", "Nadolol", "Both (a) and (b) are correct"],
        correct: 3
      },
      {
        question: "The mechanism of action of indirect-acting cholinomimetic agents is:",
        options: ["Binding to and activation of muscarinic or nicotinic receptors", "Inhibition of acetylcholinesterase action", "Stimulation of the action of acetylcholinesterase", "Releasing acetylcholine from storage sites"],
        correct: 1
      },
      {
        question: "Which of the following receptor subtypes relaxes smooth muscles and causes liver glycogenolysis and gluconeogenesis?",
        options: ["α1", "α2", "β1", "β2"],
        correct: 3
      },
      {
        question: "Which of the following receptor subtypes causes vascular smooth muscle contraction and genitourinary smooth muscle contraction?",
        options: ["α1", "α2", "β1", "β2"],
        correct: 0
      },
      {
        question: "Which of the following receptor subtypes increases heart rate and contractility, increases AV-node conduction velocity, and increases renin secretion in kidney juxtaglomerular cells?",
        options: ["α1", "α2", "β1", "β2"],
        correct: 2
      },
      {
        question: "Which of the following receptor subtype decreases insulin secretion from pancreatic β-cells, decreases nerve cell norepinephrine release, and contracts vascular smooth muscle?",
        options: ["α1", "α2", "β1", "β2"],
        correct: 1
      },
      {
        question: "What adrenergic receptor type activation results in inhibition of adenylyl cyclase via the coupling protein Gi?",
        options: ["β1", "β2", "α1", "α2"],
        correct: 3
      },
      {
        question: "What type of adrenergic receptor type that is mediated primarily by the coupling protein Gq causes activation of a membrane-bound phospholipase C (PLC)?",
        options: ["α1", "α2", "β1", "β2"],
        correct: 0
      },
      {
        question: "Which of the following adrenergic receptor activation mechanisms is involved with ephedrine, amphetamine, and tyramine?",
        options: ["Direct binding to the receptor", "Promoting release of norepinephrine", "Inhibiting reuptake of norepinephrine", "Inhibiting inactivation of norepinephrine"],
        correct: 1
      }
    ],
    'practice-test-5': [
      {
        question: "Which of the following adrenergic receptor activation mechanisms is involved with tricyclic antidepressants (TCA's) and cocaine?",
        options: ["Direct binding to the receptor", "Promoting release of norepinephrine", "Inhibiting reuptake of norepinephrine", "Inhibiting inactivation of norepinephrine"],
        correct: 2
      },
      {
        question: "What neurotransmitter is co-stored and co-released with ATP?",
        options: ["Acetylcholine", "Serotonin", "Norepinephrine", "GABA"],
        correct: 2
      },
      {
        question: "The following pharmacologic characteristics of carbachol include all except?",
        options: ["it decreases intraocular pressure", "it causes mydriasis", "it exerts both nicotinic and muscarinic effects", "it is resistant to acetylcholiesterase"],
        correct: 1
      },
      {
        question: "Dopamine receptor activation (D1) dilates renal blood vessels at low dose. At higher doses (treatment for shock), which of the following receptor is activated?",
        options: ["α-1", "α-2", "β-1", "β-2"],
        correct: 0
      },
      {
        question: "Following exposure to Sarin or Soman an organophosphate nerve gas that inhibits cholinesterase enzymes, which of the following symptoms would be noted?",
        options: ["Dry mouth", "Miosis", "Tachycardia", "Urinary retention"],
        correct: 1
      },
      {
        question: "If a patient is taking MAO inhibitors and ingests tyramine containing foods (red wine, aged cheese), which of the following acute responses is most likely?",
        options: ["Stimulation of Norepinephrine release", "Inhibition of Norepinephrine release", "Stimulation of Acetylcholine release", "Inhibition of Acetylcholine release"],
        correct: 0
      },
      {
        question: "Which of the following statements about adrenergic neurotransmission is correct?",
        options: ["MAO converts dopamine to norepinephrine in nerve terminal", "Epinephrine is the major neurotransmitter released from sympathetic nerve endings", "Norepinephrine is principally released from the adrenals", "TCA and cocaine prevent reuptake of norepinephrine into the nerve endings"],
        correct: 3
      },
      {
        question: "Which of the following G-protein is associated with smooth muscle and glandular tissue, muscarinic receptor M3, mobilizing internal Ca++ and the IP3-DAG cascade?",
        options: ["Gs", "Gi", "Gq", "Go"],
        correct: 2
      },
      {
        question: "By what mechanism do irreversible Acetylcholinesterase inhibitors permanently bind to the esteretic site enzyme?",
        options: ["Hydroxylation", "Hydrolysis", "Phosphorylation", "Methylation"],
        correct: 2
      },
      {
        question: "Which of the following G-protein is associated with heart and intestines, muscarinic receptor M2, decreasing adenyl cyclase activity, cAMP?",
        options: ["Gs", "Gi", "Gq", "Go"],
        correct: 1
      },
      {
        question: "α-2 stimulation leads to an increase in the cellular uptake of what ion, and thus a decrease in plasma concentration of what ion?",
        options: ["K+", "Ca++", "Mg++", "Na+"],
        correct: 1
      },
      {
        question: "Which of the following statements is NOT true of catecholamines?",
        options: ["Can cross the blood-brain barrier", "Cannot be used as an oral drug", "Have short duration of action", "MAO and COMT act rapidly"],
        correct: 0
      },
      {
        question: "Which of the following β-blockers is used in glaucoma patients for decreasing aqueous humor secretions from the ciliary body?",
        options: ["Propranolol", "Nadolol", "Metoprolol", "Timolol"],
        correct: 3
      },
      {
        question: "Which of the following is considered highly cardioselective β–blocker with vasodilation effect?",
        options: ["Metoprolol", "Atenolol", "Nebivolol", "Carvedilol"],
        correct: 2
      },
      {
        question: "After several doses of a new drug that causes dry mouth, dry eyes and rapid heart rate is most likely due to inhibition of what neurotransmitter?",
        options: ["Norepinephrine", "Acetylcholine", "Epinephrine", "Serotonin"],
        correct: 1
      },
      {
        question: "The ophthalmologist administer an eyedrop to dilate pupils prior to eye examination. The medication in the eyedrop is most likely acting on",
        options: ["α-1 adrenergic receptors", "Nicotinic receptors", "Acetylcholinesterase", "β-2 adrenergic receptors"],
        correct: 0
      }
    ],
    'practice-test-6': [
      {
        question: "All of the following statements are true regarding the parasympathetic nervous system except:",
        options: ["Innervation of vascular smooth muscle", "Involves rest and digestion functions", "Has nicotinic receptors on cell bodies of all postganglionic neurons", "Target organs have muscarinic receptors for Acetylcholine"],
        correct: 0
      },
      {
        question: "Nicotinic NM receptors are the ___ subtype and nicotinic NN receptors are the ___ subtype.",
        options: ["Neuronal; Muscular", "Muscular; Neuronal", "Nodal; Neuronal", "Neuronal; Nodal"],
        correct: 1
      },
      {
        question: "Which of the following drugs is a nonselective beta-blocker with intrinsic sympathomimetic activity?",
        options: ["Propranolol", "Metoprolol", "Sotalol", "Pindolol"],
        correct: 3
      },
      {
        question: "Which of the following classes of drugs will be useful in treating myasthenia gravis?",
        options: ["Anticholinesterase agents", "Muscarinic agonists", "Nicotinic antagonists", "Muscarinic antagonists"],
        correct: 0
      },
      {
        question: "Which of the following is a systemic effect of a muscarinic agonist?",
        options: ["Increase blood pressure", "Mydriasis", "Constipation", "Decrease heart rate"],
        correct: 3
      },
      {
        question: "What drug is a natural alkaloid found in plant deadly nightshade?",
        options: ["Bethanechol", "Pilocarpine", "Scopolamine", "Atropine"],
        correct: 3
      },
      {
        question: "Which of the following muscarinic antagonists with greater action on the CNS and its therapeutic use is limited to prevention of motion sickness?",
        options: ["Atropine", "Scopolamine", "Homatropine", "Tropicamide"],
        correct: 1
      },
      {
        question: "Of the following mydriatics/cycloplegics, ____ last 7-10 days (longest) and ____ last 6 hours (shortest).",
        options: ["Atropine; Scopolamine", "Homatropine; Tropicamide", "Tropicamide; Atropine", "Atropine; Tropicamide"],
        correct: 3
      },
      {
        question: "Which of the following reversible cholinesterase inhibitors is used for atropa belladonna poisoning?",
        options: ["Malathion", "Physostigmine", "Edrophonium", "Donepezil"],
        correct: 1
      },
      {
        question: "Which of the following reversible cholinesterase inhibitors is used for anesthesia?",
        options: ["Neostigmine", "Physostigmine", "Edrophonium", "Donepezil"],
        correct: 0
      },
      {
        question: "Which of the following reversible cholinesterase inhibitors is used for Alzheimer disease?",
        options: ["Neostigmine", "Physostigmine", "Edrophonium", "Donepezil"],
        correct: 3
      },
      {
        question: "A direct-acting cholinomimetic that is lipid soluble and has been used in the treatment of glaucoma is:",
        options: ["Betanechol", "Neostigmine", "Pilocarpine", "Edrophonium"],
        correct: 2
      },
      {
        question: "Activation of β receptors positive inotropic effects on the heart by increased intracellular availability of what ion?",
        options: ["K+", "Na+", "Cl-", "Ca++"],
        correct: 3
      },
      {
        question: "Which of the following agonists can cause hyperglycemia in diabetics?",
        options: ["α2-agonist", "α1-agonist", "β2-agonist", "β1-agonist"],
        correct: 2
      },
      {
        question: "Which of the following is NOT an irreversible cholinesterase inhibitor (organophosphate AChE inhibitors)?",
        options: ["Tacrine", "Echothiophate", "Sarin, soman", "Malathion, parathion"],
        correct: 0
      }]
    };// Add your tests later in this format:
// tests["Practice Test 1"] = [{ question, options: [...], answer: 0 }, ...];

const timePerQuestion = 0.6; // minutes

// ------------------ STATE ------------------
let currentTestName = "";
let currentQuestions = [];
let currentAnswers = [];
let currentIndex = 0;
let timer = null;
let timeLeft = 0;

// ------------------ DOM ------------------
const home = document.getElementById("home");
const testList = document.getElementById("testList");
const viewResultsLink = document.getElementById("viewResultsLink");

const testScreen = document.getElementById("testScreen");
const testTitle = document.getElementById("testTitle");
const timeRemaining = document.getElementById("timeRemaining");
const questionText = document.getElementById("questionText");
const options = document.getElementById("options");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

const resultScreen = document.getElementById("resultScreen");
const resultTestTitle = document.getElementById("resultTestTitle");
const score = document.getElementById("score");
const total = document.getElementById("total");
const reviewContainer = document.getElementById("reviewContainer");
const backHomeBtn = document.getElementById("backHomeBtn");

const resultsPage = document.getElementById("resultsPage");
const historyList = document.getElementById("historyList");
const backFromResults = document.getElementById("backFromResults");

// ------------------ INIT ------------------
function init() {
  testList.innerHTML = "";
  for (const name in tests) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.onclick = () => startTest(name);
    li.appendChild(btn);
    testList.appendChild(li);
  }
}
init();

// ------------------ TEST FLOW ------------------
function startTest(name) {
  currentTestName = name;
  currentQuestions = tests[name];
  currentAnswers = Array(currentQuestions.length).fill(null);
  currentIndex = 0;
  timeLeft = Math.floor(currentQuestions.length * timePerQuestion * 60);

  home.classList.add("hidden");
  testScreen.classList.remove("hidden");
  testTitle.textContent = name;
  renderQuestion();
  updateTimer();
  timer = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timer);
      showConfirmModal();
    }
  }, 1000);
}

function renderQuestion() {
  const q = currentQuestions[currentIndex];
  questionText.textContent = `Q${currentIndex + 1}: ${q.question}`;
  options.innerHTML = "";

  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.value = i;
    if (currentAnswers[currentIndex] === i) radio.checked = true;
    radio.onclick = () => currentAnswers[currentIndex] = i;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(opt));
    options.appendChild(label);
    options.appendChild(document.createElement("br"));
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === currentQuestions.length - 1;
}

prevBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
};

nextBtn.onclick = () => {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  }
};

submitBtn.onclick = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  showResults();
};

function updateTimer() {
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  timeRemaining.textContent = `${m}:${s.toString().padStart(2, "0")}`;
}


// ------------------ RESULTS ------------------
function showResults() {
  testScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  resultTestTitle.textContent = currentTestName;

  let correct = 0;
  reviewContainer.innerHTML = "";

  currentQuestions.forEach((q, i) => {
    const user = currentAnswers[i];
    const isCorrect = user === q.answer;
    if (isCorrect) correct++;

    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>Q${i + 1}:</strong> ${q.question}</p>
      <p>Your Answer: <span class="${isCorrect ? 'correct' : 'wrong'}">${q.options[user] || 'No answer'}</span></p>
      ${!isCorrect ? `<p>Correct Answer: <span class="correct">${q.options[q.answer]}</span></p>` : ""}
      ${!isCorrect ? `<a href="https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(q.question)}" target="_blank">Search on GPT</a>` : ""}
      <hr>
    `;
    reviewContainer.appendChild(div);
  });

  score.textContent = correct;
  total.textContent = currentQuestions.length;

  saveResult(currentTestName, correct, currentQuestions.length);
}
function saveResult(name, score, total) {
  const history = JSON.parse(localStorage.getItem("results") || "[]");
  history.push({ name, score, total, date: new Date().toLocaleString() });
  localStorage.setItem("results", JSON.stringify(history));
}

// ------------------ RESULTS PAGE ------------------
viewResultsLink.onclick = () => {
  home.classList.add("hidden");
  resultsPage.classList.remove("hidden");
  loadHistory();
};

backFromResults.onclick = () => {
  resultsPage.classList.add("hidden");
  home.classList.remove("hidden");
};

function loadHistory() {
  historyList.innerHTML = "";
  const history = JSON.parse(localStorage.getItem("results") || "[]");
  if (history.length === 0) {
    historyList.innerHTML = "<li>No past results found.</li>";
    return;
  }
  history.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.name} — ${entry.score}/${entry.total} on ${entry.date}`;
    historyList.appendChild(li);
  });
}

// ------------------ BACK TO HOME ------------------
backHomeBtn.onclick = () => {
  resultScreen.classList.add("hidden");
  home.classList.remove("hidden");
};