from googlesearch import search
from recipe_scrapers import scrape_me
import sys
import csv

urls = []
titles = []
ing = []
instructions = []
images = []
nutrients = []

# Format for csv file
headers = ["URLs", "Titles", "Ingredients", "Instructions", "Images", "Nutrients"]
data = [urls, titles, ing, instructions, images, nutrients]

def findRecipe(food):
    # Create the google search query
    query = food + " ingredients list"
    # Find the first several links
    for url in search(query, tld="com", lang="eng", num=10, stop=10, pause=0.5):
        scrapeInfo(url)

    writeToCsv()


def scrapeInfo(url):
    # Try opening the url
    try:
        scraper = scrape_me(url, wild_mode=True)

        # Add the scraped info into arrays
        urls.append(url)
        titles.append(scraper.title())
        ing.append(scraper.ingredients())
        instructions.append(scraper.instructions_list())
        images.append(scraper.image())
        nutrients.append(scraper.nutrients())
    except:
        pass


def writeToCsv():
    with open('data.csv', 'w', encoding='UTF8', newline='') as f:
        writer = csv.writer(f)

        # write the header
        writer.writerow(headers)

        # write the data
        writer.writerows(data)


findRecipe(sys.argv[1])