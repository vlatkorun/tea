**Twitter Entity Analysis aka TEA**

You should create a PHP service, which will analyze each tweet and will save all of this into a database

Service needs to be started via CLI or a web interface

Web interface, should be a simple webpage, built with ReactJS framework and has to have:

A button to “run” the analysis

Table of tweets and analysis for each tweet


Analysis should be done in the following manner:

When the service starts, it should call the Twitter API and gather latest 50 Tweets

The gathered tweets needs to be saved into a SQLite database into table  tweets (the table needs to consist of at least tweet_id:int and tweet:varchar)

(bonus +) Find hashtags in each tweet and save them into a table hashtags (the table needs to consist of at least tweet_id:int and hashtag)

For each Tweet Google’s NaturalLanguage API should be called from where  you should get entities (Entity Recognition)

Results from the Google API should be saved into a table entities (tabela needs to consist of at least tweet_id:int, entity_type:varchar, entity:varchar, json_result:varchar)

You can choose any framework, tools and libraries. The only limitation is Frontend where you need to use ReactJS.