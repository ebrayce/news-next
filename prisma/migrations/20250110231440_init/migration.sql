-- CreateTable
CREATE TABLE "News" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "author" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "imgUrl" TEXT,
    "content" TEXT,
    "publishedAt" DATETIME
);
