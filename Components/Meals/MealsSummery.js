import classes from './MealsSummury.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delecious food, Deleverd to you</h2>
            <p>
                Choose your favorite meal from our broad selections of available meals
                and enjoy a Delecious lunch or dinner at home.
            </p>

            <p>
                All our meals coocked with high-quality ingredients, just-in-time and of 
                course by experienced chefs! 
            </p>
        </section>
    )
}

export default MealsSummary;