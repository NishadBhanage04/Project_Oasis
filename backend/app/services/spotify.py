class SpotifyService:
    """
    Placeholder service for future Spotify integration.
    Planned Architecture:
    Mood Logs -> Stress Pattern -> Music Preferences -> Spotify API
    """
    def get_music_recommendations(self, mood: str, category: str):
        # Mock recommendations for v0.1
        return {
            "message": "Spotify integration coming soon!",
            "suggestions": ["Lo-fi Study Beats", "Deep Focus", "Calm Piano"]
        }

spotify_service = SpotifyService()
