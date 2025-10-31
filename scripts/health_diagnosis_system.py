from experta import *
from termcolor import colored
import sys

# Define Facts for symptoms
class Symptom(Fact):
    """Facts about symptoms"""
    pass

class Diagnosis(Fact):
    """Facts about diagnosis"""
    pass

class HealthDiagnosis(KnowledgeEngine):
    """Expert system for health diagnosis"""
    
    @DefFacts()
    def initial_facts(self):
        """Initial facts - we'll add symptoms dynamically"""
        yield Fact(reasoning_complete=False)
    
    # Rules for Viral Fever
    @Rule(
        Symptom(name='fever', value=True),
        Symptom(name='headache', value=True),
        NOT(Symptom(name='cough', value=True))
    )
    def viral_fever_1(self):
        self.declare(Diagnosis(
            disease='Viral Fever',
            confidence='High',
            precautions=[
                'Drink plenty of fluids and water',
                'Get adequate rest',
                'Take paracetamol/ibuprofen for fever',
                'Eat light nutritious food',
                'Consult doctor if fever persists beyond 3 days'
            ]
        ))
    
    # Rules for Common Cold
    @Rule(
        Symptom(name='cough', value=True),
        Symptom(name='runny_nose', value=True),
        NOT(Symptom(name='fever', value=True))
    )
    def common_cold(self):
        self.declare(Diagnosis(
            disease='Common Cold',
            confidence='High',
            precautions=[
                'Stay hydrated',
                'Get plenty of rest',
                'Use saline nasal drops',
                'Eat citrus fruits for vitamin C',
                'Avoid close contact with others',
                'Should improve in 5-7 days'
            ]
        ))
    
    # Rules for Flu
    @Rule(
        Symptom(name='fever', value=True),
        Symptom(name='cough', value=True),
        Symptom(name='body_pain', value=True)
    )
    def flu(self):
        self.declare(Diagnosis(
            disease='Influenza (Flu)',
            confidence='High',
            precautions=[
                'Rest for at least 5-7 days',
                'Stay hydrated with water and fluids',
                'Take antiviral medication if prescribed',
                'Use fever-reducing medications',
                'Avoid strenuous activities',
                'Get vaccinated next season'
            ]
        ))
    
    # Rules for Malaria
    @Rule(
        Symptom(name='fever', value=True),
        Symptom(name='chills', value=True),
        Symptom(name='body_pain', value=True),
        Symptom(name='vomiting', value=True)
    )
    def malaria(self):
        self.declare(Diagnosis(
            disease='Malaria',
            confidence='High',
            precautions=[
                '⚠️  URGENT: Consult doctor immediately',
                'Get blood tests done (Rapid Diagnostic Test)',
                'Start antimalarial treatment if confirmed',
                'Maintain hydration',
                'Use mosquito nets and repellent',
                'Take prescribed antimalarial medications completely',
                'Avoid self-medication'
            ]
        ))
    
    # Rules for Typhoid
    @Rule(
        Symptom(name='fever', value=True),
        Symptom(name='headache', value=True),
        Symptom(name='stomach_pain', value=True)
    )
    def typhoid(self):
        self.declare(Diagnosis(
            disease='Typhoid Fever',
            confidence='Medium',
            precautions=[
                '⚠️  URGENT: Consult doctor for blood test',
                'Get blood culture test done',
                'Take prescribed antibiotics completely',
                'Stay hydrated with clean drinking water',
                'Avoid oily and spicy food',
                'Rest completely during treatment',
                'Maintain hygiene and sanitation'
            ]
        ))
    
    # Rules for Diabetes screening
    @Rule(
        Symptom(name='excessive_thirst', value=True),
        Symptom(name='frequent_urination', value=True),
        Symptom(name='fatigue', value=True)
    )
    def diabetes_screening(self):
        self.declare(Diagnosis(
            disease='Possible Diabetes (Requires Medical Confirmation)',
            confidence='Medium',
            precautions=[
                'Get blood glucose test and HbA1c done',
                'Consult an endocrinologist',
                'Reduce sugar and refined carbohydrates',
                'Increase physical activity',
                'Maintain healthy weight',
                'Eat balanced diet with whole grains',
                'Regular exercise (30 min daily)',
                'Regular blood sugar monitoring'
            ]
        ))
    
    # Rules for Allergies
    @Rule(
        Symptom(name='runny_nose', value=True),
        Symptom(name='itchy_eyes', value=True),
        NOT(Symptom(name='fever', value=True))
    )
    def allergies(self):
        self.declare(Diagnosis(
            disease='Allergies',
            confidence='Medium',
            precautions=[
                'Identify and avoid allergens',
                'Use antihistamine medications',
                'Keep environment clean and dust-free',
                'Use air purifiers if needed',
                'Wash hands frequently',
                'Avoid exposure to pets if allergic',
                'Use saline nasal drops'
            ]
        ))
    
    # Generic Rule: Something might be wrong
    @Rule(
        Symptom(name='feeling', value='unwell')
    )
    def general_concern(self):
        self.declare(Diagnosis(
            disease='General Illness',
            confidence='Low',
            precautions=[
                'Rest and monitor your symptoms',
                'Stay hydrated',
                'Avoid strenuous activities',
                'If symptoms persist, consult a doctor'
            ]
        ))


def display_symptoms():
    """Display available symptoms"""
    symptoms = {
        '1': ('fever', 'Do you have fever?'),
        '2': ('headache', 'Do you have headache?'),
        '3': ('cough', 'Do you have cough?'),
        '4': ('runny_nose', 'Do you have runny nose?'),
        '5': ('body_pain', 'Do you have body pain?'),
        '6': ('chills', 'Do you have chills?'),
        '7': ('vomiting', 'Do you have vomiting?'),
        '8': ('stomach_pain', 'Do you have stomach pain?'),
        '9': ('excessive_thirst', 'Do you have excessive thirst?'),
        '10': ('frequent_urination', 'Do you urinate frequently?'),
        '11': ('fatigue', 'Do you feel fatigue?'),
        '12': ('itchy_eyes', 'Do you have itchy eyes?'),
    }
    return symptoms


def get_symptoms():
    """Get symptoms from user"""
    symptoms = display_symptoms()
    selected_symptoms = {}
    
    print("\n" + "="*60)
    print(colored("HEALTH DIAGNOSIS EXPERT SYSTEM", "cyan", attrs=["bold"]))
    print("="*60)
    print(colored("\nAvailable Symptoms:", "yellow", attrs=["bold"]))
    
    for key, (name, question) in symptoms.items():
        print(f"{key}. {question}")
    
    print("\n" + "-"*60)
    print(colored("Enter symptom numbers (comma-separated) or 'all' for interactive mode", "green"))
    print("Example: 1,2,3 or 'all'")
    print("-"*60)
    
    user_input = input(colored("\nYour choice: ", "cyan")).strip().lower()
    
    if user_input == 'all':
        # Interactive mode
        for key, (name, question) in symptoms.items():
            response = input(colored(f"\n{question} (yes/no): ", "magenta")).strip().lower()
            selected_symptoms[name] = response in ['yes', 'y']
    else:
        # Direct selection mode
        try:
            selected_keys = user_input.split(',')
            for key in selected_keys:
                key = key.strip()
                if key in symptoms:
                    selected_symptoms[symptoms[key][0]] = True
        except:
            print(colored("Invalid input!", "red"))
            return get_symptoms()
    
    return selected_symptoms


def run_diagnosis():
    """Run the diagnosis engine"""
    symptoms = get_symptoms()
    
    if not symptoms or not any(symptoms.values()):
        print(colored("\n⚠️  No symptoms selected. Please try again.", "yellow"))
        return
    
    # Create engine and declare facts
    engine = HealthDiagnosis()
    
    # Add selected symptoms as facts
    for symptom_name, symptom_value in symptoms.items():
        engine.declare(Symptom(name=symptom_name, value=symptom_value))
    
    # Run inference
    engine.run()
    
    # Get diagnoses
    diagnoses = [fact for fact in engine.facts.values() if isinstance(fact, Diagnosis)]
    
    print("\n" + "="*60)
    print(colored("DIAGNOSIS RESULTS", "cyan", attrs=["bold"]))
    print("="*60)
    
    if diagnoses:
        for idx, diagnosis in enumerate(diagnoses, 1):
            print(f"\n{colored(f'Diagnosis #{idx}:', 'green', attrs=['bold'])}")
            print(f"  Disease: {colored(diagnosis['disease'], 'yellow', attrs=['bold'])}")
            print(f"  Confidence: {colored(diagnosis['confidence'], 'yellow')}")
            print(f"\n  {colored('Precautions:', 'cyan', attrs=['bold'])}")
            for precaution in diagnosis['precautions']:
                print(f"    • {precaution}")
    else:
        print(colored("\nNo specific diagnosis found. Please consult a doctor for proper evaluation.", "yellow"))
    
    print("\n" + "="*60)
    print(colored("⚠️  DISCLAIMER: This is an educational tool only!", "red", attrs=["bold"]))
    print(colored("Always consult a qualified healthcare professional for accurate diagnosis.", "red"))
    print("="*60 + "\n")


def main():
    """Main entry point"""
    try:
        while True:
            run_diagnosis()
            again = input(colored("Do you want to run another diagnosis? (yes/no): ", "cyan")).strip().lower()
            if again not in ['yes', 'y']:
                print(colored("\nThank you for using Health Diagnosis Expert System!", "green", attrs=["bold"]))
                break
    except KeyboardInterrupt:
        print(colored("\n\nExiting... Thank you!", "yellow"))
        sys.exit(0)
    except Exception as e:
        print(colored(f"\nError: {str(e)}", "red"))
        sys.exit(1)


if __name__ == '__main__':
    main()
