import FluxStore from './FluxStore';
import FoodsActionTypes from '../constants/action-types/FoodsActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { FoodsState, Answer } from '../types/FoodsState';

class FoodsStore extends FluxStore<FoodsState> {
  constructor(dispatcher) {
    super(dispatcher, () => ({
      whatFood: '',
      foods: [
        {
          question: "Are Almonds Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Anaheim Peppers Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Anchovies Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Apples Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Apricot Kernels Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Apricots Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Artichokes Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Avocados Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Bagels Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Bamboo Shoots Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Banana Peppers Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Bananas Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Bean Sprouts Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Are Beans Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Beets Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Bell Peppers Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Biscuits Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Black Beans Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Black Radishes Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Black-Eyed Peas Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Blackberries Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Blueberries Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Bones Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Brazil Nuts Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Brown Mustard Seeds Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Brownies Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Brussels Sprouts Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Cacao Nibs Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Cape Gooseberries Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Capers Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Carrots Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Cashews Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Cheerios Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Cherries Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Chestnuts Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Chia Seeds Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Chickpeas Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Chili Peppers Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Chitosan Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Chives Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Chocolate Chips Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Are Cipolla Onions Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Clams Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Clementines Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Cloves Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Coconut Aminos Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Coconut Flakes Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Collard Greens Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Cookies Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Corn Husks Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Crackers Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Cranberries Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Croissants Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Croutons Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Cubanelle Peppers Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Cucumbers Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Cupcakes Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Currants Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Daikon Radishes Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Dandelion Greens Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Dates Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Donuts Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Doughnuts Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Eggs Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Energy Drinks Paleo?",
          answer: Answer.No
        },
        {
          question: "Are English Muffins Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Figs Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Flax Seeds Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are French Fries Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Garbanzo Beans Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Garlic Scapes Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Goji Berries Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Gooseberries Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Grape Leaves Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Grapes Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Green Beans Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Are Green Onions Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Guajillo Peppers Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Guavas Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Hazelnuts Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Herbs Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Hot Pockets Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Jalapeño Peppers Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Kidney Beans Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Kiwis Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Leeks Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Legumes Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Lemons Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Limes Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Lotus Roots Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Lychees Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Macadamia Nuts Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Mangoes Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Marshmallows Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Micro Greens Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Milkshakes Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Muffins Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Mushrooms Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Mussels Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Mustard Greens Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Nectarines Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Nightshades Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Nuts Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Olives Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Onions Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Oranges Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Oysters Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Pancakes Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Parsnips Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Pastries Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Peaches Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Peanuts Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Pears Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Peas Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Are Pecans Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Pepitas Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Peppadew Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Peppers Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Persimmons Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Pickles Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Pine Nuts Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Pinto Beans Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Pistachios Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Plantains Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Plums Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Pluots Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Poblano Peppers Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Pomegranates Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Pop Tarts Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Poppy Seeds Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Potato Chips Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Prawns Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Pretzels Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Pumpkin Seeds Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Purple Potatoes Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Are Radishes Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Raisins Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Ramps Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Raspberries Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Red Onions Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Red Pepper Flakes Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Red Potatoes Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Are Refried Beans Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Ribs Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Rutabagas Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are S’mores Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Sacha Inchi Seeds Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Salad Turnips Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Sandwiches Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Sardines Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Savory Leaves Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Scallions Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Scallops Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Scones Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Seeds Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Serrano Peppers Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Sesame Seeds Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Shallots Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Smoothies Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Are Snails Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Spices Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Sprouts Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Squash Blossoms Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Strawberries Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Sun-Dried Tomatoes Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Sunflower Seeds Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Sweet Potato Fries Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Are Sweet Potatoes Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Tacos Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Are Tamales Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Tangerines Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Tarts Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Tigernuts Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Tomatillos Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Tomatoes Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Tortillas Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Turnip Greens Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Turnips Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Vanilla Beans Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Vegetables Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Vidalia Onions Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Waffles Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Walnuts Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are White Onions Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are White Potatoes Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Are Whole Grains Paleo?",
          answer: Answer.No
        },
        {
          question: "Are Yams Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Yellow Mustard Seeds Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Are Yellow Onions Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Acorn Squash Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Agave Nectar Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Alcohol Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Allspice Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Almond Butter Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Almond Extract Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Almond Flour Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Almond Meal Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Almond Milk Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Amaranth Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Animal Skin Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Anise Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Annatto Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Apple Butter Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Apple Cider Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Apple Cider Vinegard Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Apple Pie Spice Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Applesauce Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Arrowroot Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Arugula Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Asparagus Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Avocado Oil Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Bacon Fat/Lard Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Bacon Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Baking Chocolate Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Baking Powder Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Baking Soda Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Balsamic Vinegar Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Banana Flour Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Barley Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Barramundi Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Basil Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Bay Leaf Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is BBQ Sauce Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Bee Pollen Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Beef Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Beer Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Bison Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Bittersweet Chocolate Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Black Pepper Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Black Tea Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Boar Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Bok Choy Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Bone Broth Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Boston Lettuce Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Bouquet Garni Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Brandy Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Bread Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Brine Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Broccoli Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Brown Sugar Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Buckwheat Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Buffalo Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Bulgur Wheat Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Butter Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Buttermilk Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Butternut Squash Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cabbage Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Caffeine Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cake Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Camel Meat Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Candy Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Canola Oil Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Cantaloupe Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Caramel Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Caraway Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cardamom Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Carob Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Carp Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Carrageenan Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Cassava Flour Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cassava Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Catfish Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cauliflower Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cayenne Pepper Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Celeriac Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Celery Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Celery Root Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Celery Salt Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Celery Seed Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cereal Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Chai Tea Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Champagne Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Champagne Vinegar Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Chard Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Chayote Squash Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cheese Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Chervil Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Chicken Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Chicory Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Chili Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Chili Powder Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Chipotle Powder Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Chipotle Salt Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Chocolate Milk Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Chocolate Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Chorizo Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cilantro Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cinnamon Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cocoa Butter Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cocoa Mass Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cocoa Powder Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Coconut Butter Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Coconut Cream Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Coconut Flour Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Coconut Milk Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Coconut Oil Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Coconut Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Coconut Sugar Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Coconut Water Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cod Liver Oil Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cod Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Coffee Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Coriander Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Corn Flour Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Corn Oil Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Corn Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Corn Starch Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Cornmeal Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Cottonseed Oil Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Cottonseed Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Couscous Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Crab Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cream Cheese Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Cream of Tartar Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cream Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Crème Brûlée Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Crème Caramel Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Crème Fraîche Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Culantro Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Cumin Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Curry Powder Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Custard Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Dairy Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Dark Chocolate Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Desiccated Coconut Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Diet Pop Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Diet Soda Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Dill Seed Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Dill Weed Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Dragon Fruit Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Duck Fat Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Duck Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Dumpling Squash Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Edamame Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Eggnog Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Eggplant Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Elk Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Endive Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Escarole Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Ezekiel Bread Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Fennel Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Fenugreek Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Fermented Soy Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Fish Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Fish Roe Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Fish Sauce Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Flax Seed Meal Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Flax Seed Oil Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Flour Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Frisee Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Frosting Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Frozen Yogurt Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Fruit Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Fudge Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Galangal Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Garam Masala Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Garlic Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Garlic Powder Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Garlic Salt Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Gelatin Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Gelato Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Ghee Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Giardiniera Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Gin Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Ginger Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Gizzard Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Gluten Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Glycomaize Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Goat Fat Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Goat Milk Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Goat Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Goat Whey Protein Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Goose Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Grape Seed Oil Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Grapefruit Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Green Cabbage Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Green Tea Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Grouper Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Guar Gum Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Habanero Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Halibut Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Ham Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Hard Cider Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Harissa Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Heart Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Hemp Oil Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Hemp Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Herbal Tea Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Herbes de Provence Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Herring Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Hominy Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Honey Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Honeydew Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Horseradish Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Hot Chocolate Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Hot Cocoa Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Hot Fudge Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Hot Sauce Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Hummus Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Ice Cream Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Icing Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Italian Seasoning Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Jam Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Jelly Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Jicama Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Juice Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Juniper Berry Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Kabocha Squash Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Kale Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Kefir Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Ketchup Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Kimchi Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Kohlrabi Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Kombucha Tea Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Kremelta Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Lamb Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Lavender Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Lemon Verbena Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Lemongrass Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Lettuce Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Linseed Oil Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Liver Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Lobster Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Macadamia Nut Oil Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Mace Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Mackerel Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Mahi Mahi Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Malanga Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Malt Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Malt Vinegar Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Maple Syrup Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Margarine Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Marjoram Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Marmalade Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Marshmallow Root Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Mascarpone Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Matcha Green Tea Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Mayonnaise Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is MCT Oil Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Mead Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Mezcal Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Milk Chocolate Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Milk Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Millet Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Mint Extract Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Mint Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Miso Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Molasses Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Moose Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is MSG Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Mustard Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Mutton Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Natto Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Nori Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Nutmeg Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Nutritional Yeast Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Oatmeal Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Octopus Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Offal Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Okra Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Olive Oil Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Onion Powder Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Oolong Tea Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Oregano Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Organ Meat Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Orzo Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Ostrich Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Oxtail Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Palm Oil Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Palm Shortening Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Panko Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Papaya Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Paprika Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Parsley Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Passion Fruit Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Pasta Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Peanut Butter Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Peanut Oil Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Pectin Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Peppermint Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Pepperoni Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Pheasant Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Pie Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Pineapple Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Pita Bread Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Pizza Dough Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Plantain Flour Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Pop Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Popcorn Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Pork Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Port Wine Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Potato Flour Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Potato Starch Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Prosciutto Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Psyllium Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Pumpkin Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Pumpkin Pie Spice Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Purple Cabbage Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Quail Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Quiche Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Quinoa Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Quorn Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Rabbit Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Radicchio Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Rapeseed Oil Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Rapini Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Red Kuri Squash Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Red Wine Vinegar Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Rhubarb Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Rice Bran Oil Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Rice Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Rice Vinegar Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Romaine Lettuce Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Rooibos Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Rosemary Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Royal Jelly Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Rum Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Rye Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Safflower Oil Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Saffron Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Sage Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Sake Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Salmon Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Santa Claus Melon Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Sauerkraut Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Sausage Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Schmaltz Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Scotch Bonnet Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Sea Salt Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Seafood Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Seaweed Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Semi-Sweet Chocolate Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Sesame Seed Oil Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Sherbet Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Sherry Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Sherry Vinegar Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Shredded Coconut Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Shrimp Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Simple Syrup Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Smoked Salmon Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Snapper Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Soda Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Sorbet Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Sour Cream Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Soy Lecithin Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Soy Milk Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Soy Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Soy Sauce Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Soybean Oil Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Spearmint Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Spelt Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Spinach Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Spirulina Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Squab Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Squash Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Squid Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Star Anise Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Star Fruit Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Stevia Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Stock Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Suet Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Sugar Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Summer Squash Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Sunflower Butter Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Sunflower Oil Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Sushi Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Sweet Potato Flour Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Swiss Chard Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Tallow Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Tapioca Flour Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Tapioca Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Taro Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Tarragon Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Tea Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Tempeh Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Tequila Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Thyme Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Tilapia Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Tiramisu Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Tisane Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Toast Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Toffee Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Tofu Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Tomato Paste Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Tomato Sauce Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Tongue Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Trout Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Tuna Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Turkey Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Turmeric Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Unsweetened Chocolate Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is V8 Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Vanilla Extract Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Veal Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Vegetable Broth Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Vegetable Oil Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Vegetable Shortening Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Venison Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Vermouth Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Vinegar Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Vodka paleo?",
          answer: Answer.No
        },
        {
          question: "Is Walnut Oil Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Wasabi Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Watercress Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Watermelon Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Wheat Bran Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Wheat Germ Oil Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Wheat Germ Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Wheat Paleo?",
          answer: Answer.No
        },
        {
          question: "Is Wheatgrass Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Whey Protein Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Whipped Cream Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Whiskey Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is White Chocolate Paleo?",
          answer: Answer.No
        },
        {
          question: "Is White Tea Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Wine Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Xanthan Gum Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Yeast Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Yerba Mate Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Yogurt Paleo?",
          answer: Answer.Maybe
        },
        {
          question: "Is Yuca Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Za’atar Paleo?",
          answer: Answer.Yes
        },
        {
          question: "Is Zucchini Paleo?",
          answer: Answer.Yes
        }
      ]
    }));
  }

  getState() {
    return this._state
  }

  _onDispatch(action) {
    switch(action.type) {
      case FoodsActionTypes.FOOD_CHANGED:
      this._state.whatFood = action.food;
      this.emitChange();
      break;
    }
  }
}

const foodsStoreInstance = new FoodsStore(AppDispatcher);
export default foodsStoreInstance;
