# service/init_data.py
import json
from Services.vectorstore import init_vector_store

def load_documents():
    docs = []

    for file_path in ["data/menu.json", "data/faq.json", "data/policy.json"]:
        with open(file_path, "r", encoding="utf-8") as f:
            items = json.load(f)
            for item in items:
                docs.append({"text": item["text"]})

    return docs

def initialize_rag():
    documents = load_documents()
    return init_vector_store(documents)