from flask import Flask, request, jsonify
from googletrans import Translator

app = Flask(__name__)

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.json
    email_content = data.get('content', '')

    summary = email_content[:100] + '...' if len(email_content) > 100 else email_content

    return jsonify({"summary": summary})

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.json
    text = data.get('text', '')
    target_lang = data.get('target_lang', 'en')

    translator = Translator()
    translated = translator.translate(text, dest=target_lang)

    return jsonify({"translated_text": translated.text})

if __name__ == '__main__':
    app.run(debug=True)
