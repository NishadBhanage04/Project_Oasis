def get_recommendations(category: str, mood: str, factors: list):
    """
    Generate general wellness recommendations based on assessment.
    """
    recs = []

    if category == "High":
        recs = [
            "Take a short break before continuing your work.",
            "Break your current task into smaller, manageable steps.",
            "Try a 5-minute deep breathing exercise.",
            "Consider talking to a trusted friend or mentor."
        ]
    elif category == "Moderate":
        recs = [
            "Take a short walk to clear your head.",
            "Try a focused Pomodoro study session.",
            "Reduce distractions in your current environment.",
            "Listen to a relaxing playlist."
        ]
    else: # Low
        recs = [
            "Continue your current positive routine.",
            "Maintain healthy study-life balance.",
            "Keep tracking your mood to maintain awareness."
        ]

    # Factor-specific additions
    if "Exams" in factors or "Assignments" in factors:
        recs.append("Prioritize your tasks using a To-Do list.")

    if "Relationships" in factors or "Personal" in factors:
        recs.append("Set some personal boundaries for the day.")

    return recs[:4] # Return top 4
