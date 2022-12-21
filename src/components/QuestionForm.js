function QuestionForm(){

    function handleSubmit(e){
            e.preventDefault();
            alert(e.target['myInput'].value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='myInput' defaultValue='tapez votre texte ici !'/>
            <button type='submit'>Entrer</button>
        </form>
    )

}
export default QuestionForm;