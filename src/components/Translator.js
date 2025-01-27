import React, { useState } from 'react'

const Translator = () => {
    const [srcLanguage, setSrcLanguage] = useState('en');
    const [targetLanguage, setTargetLanguage] = useState('es');
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const translator=async(event)=>{
        event.preventDefault();
        const url = 'https://text-translator2.p.rapidapi.com/translate';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': '6e99364c59mshd702e98a4c1a35ep1f8c99jsn78a7bab77990',
                'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                source_language: srcLanguage,
                target_language: targetLanguage,
                text: text
            })
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setTranslatedText(result.data.translatedText);
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div className='container m-5 rounded border border-secondary shadow p-4 mx-auto'>
        <form onSubmit={translator}>
            <div className="mb-3">
                <label className="form-label">Enter Text</label>
                <input type="text" className="form-control" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className='d-flex justify-content-between'>
                <div className="mb-3">
                    <label className="form-label">Source Language</label>
                    <select className='form-select' value={srcLanguage} onChange={(e) => setSrcLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="te">Telugu</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Target Language</label>
                    <select className='form-select' value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="te">Telugu</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>
            </div>

            <div className='mb-3'>
                <h3>Translated Text</h3>
                <p className='p-3 bg-light rounded py-4'>{translatedText}</p>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
  )
}

export default Translator
