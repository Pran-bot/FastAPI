# service/rag_service.py
from Services.vectorstore import get_vector_store

def query_rag(question, k=3):
    """
    Returns top-k similar documents for the user question.
    """
    store = get_vector_store()
    results = store.similarity_search(question, k=k)
    return [res.page_content for res in results]