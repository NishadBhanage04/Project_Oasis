def assess_stress_level(mood: str, stress_level: int, factors: list):
    """
    Rule-based Stress Pattern Assessment.
    Not a medical diagnosis.
    """
    score = stress_level

    # Mood weight
    if mood.lower() in ["stressed", "low"]:
        score += 2

    # Factor weight
    academic_factors = ["Academics", "Exams", "Assignments"]
    for factor in factors:
        if factor in academic_factors:
            score += 1

    # Categorization
    if score >= 12:
        return "High"
    elif score >= 7:
        return "Moderate"
    else:
        return "Low"
