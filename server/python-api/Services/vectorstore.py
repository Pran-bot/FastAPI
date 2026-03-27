from langchain_community.vectorstores import Chroma
from langchain.embeddings.huggingface import HuggingFaceEmbeddings
from langchain.schema import Document

vector_store = None

def init_vector_store(documents, collection_name="pizza-paradise"):
    """
    Initializes Chroma vector store with documents and embeddings.
    `documents` should be a list of Document objects or dicts with 'text'.
    """
    global vector_store
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

    # Convert dicts to Document objects if needed
    if isinstance(documents[0], dict) and "text" in documents[0]:
        documents = [Document(page_content=doc["text"]) for doc in documents]

    vector_store = Chroma.from_documents(
        documents,
        embeddings,
        collection_name=collection_name
    )
    return vector_store

def get_vector_store():
    if vector_store is None:
        raise ValueError("Vector store not initialized")
    return vector_store