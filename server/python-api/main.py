from fastapi import FastAPI
from pydantic import BaseModel
from Services.init_data import initialize_rag
from Services.rag_service import query_rag

app = FastAPI(title="Pizza RAG Service")

# Initialize vector store on startup
@app.on_event("startup")
def startup_event():
    initialize_rag()
    print("RAG Vector store initialized")

# Request model
class Query(BaseModel):
    question: str

@app.get("/")
async def root():
    return {"title": "Pizza Paradise FastAPI Server!"}

# health route
@app.get("/health")
async def health_check():
    return {"FastAPI server is healthy!!!"}


@app.post("/query")
def ask_rag(data: Query):
    results = query_rag(data.question)
    return {"results": results}