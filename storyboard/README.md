#### Please use the [reference](https://github.com/virtual-labs/ph3-exp-dev-process/blob/main/storyboard/README.org) document to fill this template. Follow the [link](https://github.com/virtual-labs/ph3-exp-dev-process/tree/main/sample/storyboard) to view a sample storyboard document. 



## Storyboard

Delete this line before submission : The core principle of storyboarding is to make the lab/experiment documentation elaborated in a manner that it makes easy for any person (developer/domain and non domain faculty/student) to understand and develop the lab/experiment.

Experiment 1: Name of the Experiment

### 1. Story Outline
This experiment aims to simulate the working of a Differential Phase Shift Keying (DPSK) Modulator using an interactive virtual lab. The goal is to help students visualize the concept of DPSK modulation, which is an essential technique in digital communication. The simulation guides the learner through the generation of a binary data sequence, differential encoding, and finally the modulation process where the phase of a carrier signal is changed in accordance with the encoded data.

The story takes the learner from theory to practice by first introducing the basic concept of DPSK and then allowing them to perform a step-by-step simulation. Through this interactive environment, students gain a better understanding of how data is encoded in the phase of a carrier signal without requiring an absolute phase reference. The experiment is especially helpful for electronics and communication engineering students to visualize abstract digital modulation concepts in a controlled, error-free environment.

### 2. Story
The story begins with a learner logging into the virtual lab environment, where they are introduced to the fundamentals of DPSK through brief, simplified text explanations. After understanding the theory, they proceed to the simulation section.

Here, the student sees a modular block-based interface representing a DPSK modulator. Blocks such as the binary data generator, differential encoder, NRZ (Non-Return-to-Zero) converter, carrier generator, and DPSK modulator are all visualized. Each block has tooltips and guides, explaining its purpose in simple language.

The student starts the simulation by selecting input parameters (e.g., binary data length, carrier frequency), then clicks "Run Simulation". The system dynamically generates output waveforms, updating in real time as the modulation process occurs. Learners can pause, reset, or view block-specific outputs to better understand each phase of modulation


#### 2.1 Set the Visual Stage Description:
When the user lands on the simulator, they see a visually organized block diagram layout. Each component of the DPSK system (Binary Source, Differential Encoder, Carrier Generator, DPSK Modulator) is represented as a labeled module. There's a control panel on the side to set parameters like input data length, carrier frequency, and bit rate. Below the blocks, a graph area shows the generated waveforms: the binary input, the differentially encoded signal, the carrier, and the final modulated signal. Tooltips and brief descriptions appear when the user hovers over any block

#### 2.2 Set User Objectives & Goals:
The primary goal of the user is to understand and visualize the DPSK modulation process. The user should:

Learn how data is encoded using phase differences.

Simulate each step of DPSK modulation using block-level interactivity.

Observe changes in waveforms as they modify simulation parameters.

Analyze how phase shifts represent binary data.

The learner begins the experiment by reading a brief objective description, then progresses through block-by-block understanding and simulation. The goal is not just to view results, but to interact with the system, vary inputs, and correlate those with output changes

#### 2.3 Set the Pathway Activities:

Step 1: User selects the binary data sequence or allows the system to generate a random one.

Step 2: The binary data is passed to the Differential Encoder block. The user can click to view the encoded sequence.

Step 3: The signal is converted to NRZ format for modulation.

Step 4: The Carrier Generator outputs a sinusoidal waveform with the chosen frequency.

Step 5: The DPSK Modulator multiplies the carrier and encoded signal, and the modulated waveform is displayed.

Step 6: Users can modify parameters and observe how changes affect the output.

Step 7: The user answers interactive questions based on the simulation and can take a quiz at the end

##### 2.4 Set Challenges and Questions/Complexity/Variations in Questions:
The learner must determine which waveform represents the original data, which one shows differential encoding, and which one shows the final DPSK signal.

Quizzes may include:

What happens if you change the initial reference phase?

How is data '1' and '0' represented in the DPSK waveform?

What will happen if the NRZ converter is removed?

Challenges involve predicting waveform behavior before simulation or choosing correct parameters for desired output


##### 2.5 Allow pitfalls:
If the user skips the differential encoding stage and tries to modulate directly, the simulation generates a warning: “Missing differential encoding block – DPSK requires relative phase information.”

If incorrect parameters are selected (e.g., data length = 0), the simulator does not proceed and highlights the issue.

Selecting too high a frequency relative to bit rate prompts a caution: “Carrier frequency too high – output may be distorted.”

These pitfalls help reinforce proper setup and logical understanding before proceeding

##### 2.6 Conclusion:
At the end of the experiment, the user receives a summary report:

Total time taken

Number of correct answers in quiz

Number of hints used

Final DPSK waveform with analysis

The user is also shown learning outcomes, such as:

Visual understanding of DPSK

Knowledge of each block in the modulator chain

How phase changes encode data bits

Confidence in handling modulation parameters

This reinforces their grasp on both theory and practical aspects of DPSK.

##### 2.7 Equations/formulas: NA
Type equations here : (Guide : ( a separate sheet having equations / programs for the lab exper3ment to be shared along with the Story submissions (1) . You can mark it as numerical reference numbers within the story narration (like we cite in the research papers) and then separately share these equations/programs sheets as a reference, do not include the equations as a whole in the narration))
Tool can be used to integrate formula in Markdown <b> [here](http://latex.codecogs.com/eqneditor/samples/example3.php) </b>


### 3. Flowchart
Link to flow chart Here : Store in the  /flowchart folder within pedagogy folder in your repo
<br>
(Guide :The lab proposer should extract logic from the story, prepare a flowchart from the story narration and write the algorithm to execute the black box.  use Google Drawings https://docs.google.com/drawings/ (send the link to your flowchart and also attach .png by exporting it )

### 4. Mindmap
 Link to mindmap here : Store the mindmap in both .mm & .png extension in the  /mindmap folder and include link of only .pdf verison here
 <br>
 (Guide : An elaborate mind map (connecting all the points in the experiment flow ) should be prepared and submitted by the lab proposer. The mind map should be a clear and detailed document that takes into account all minute intri5acies involved in the development of virtual lab. The mindmap should be self-content and any developer across the globe should be able to code it with all those details. using only FreeMind http://freemind.sourceforge.net/wiki/index.php/Main_Page (send the .png file and also the original .mm extension project file. )

### 5. Storyboard

Link the storyboard (.gif file ) in here :
(Guide: This document should include sketching and description scene wise (duration, action, description). Software to be used for storyboarding : https://wonderunit.com/storyboarder/ (Its a FOSS tool).
