from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Default to a local SQLite database
    database_url: str = "sqlite+aiosqlite:///./cars.db"

    class Config:
        env_file = ".env"

settings = Settings()
