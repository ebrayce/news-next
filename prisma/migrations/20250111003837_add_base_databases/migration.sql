-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "imgurl" TEXT,
    "content" TEXT,
    "publishedAt" TIMESTAMP(3),
    "categoryId" INTEGER,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
