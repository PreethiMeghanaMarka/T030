
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { FileInput, Award, BookOpen, FileCheck, CheckCircle } from 'lucide-react';

const DataEntry = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Entry Submitted",
        description: "Your innovation data has been successfully recorded.",
        action: (
          <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
        ),
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Innovation <span className="gradient-text">Data Entry</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Record your institution's innovation achievements. Each entry contributes to a comprehensive database that showcases your innovation excellence.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="research" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="research" className="flex flex-col items-center gap-2 py-3">
                  <BookOpen className="h-5 w-5" />
                  <span>Research</span>
                </TabsTrigger>
                <TabsTrigger value="patents" className="flex flex-col items-center gap-2 py-3">
                  <FileCheck className="h-5 w-5" />
                  <span>Patents</span>
                </TabsTrigger>
                <TabsTrigger value="awards" className="flex flex-col items-center gap-2 py-3">
                  <Award className="h-5 w-5" />
                  <span>Awards</span>
                </TabsTrigger>
                <TabsTrigger value="others" className="flex flex-col items-center gap-2 py-3">
                  <FileInput className="h-5 w-5" />
                  <span>Others</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="research">
                <Card>
                  <CardHeader>
                    <CardTitle>Research Publication Entry</CardTitle>
                    <CardDescription>
                      Enter details about research papers, articles, or conference publications.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="title">Publication Title</Label>
                          <Input id="title" placeholder="Enter the full title of the publication" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="authors">Authors</Label>
                            <Input id="authors" placeholder="Comma-separated list of authors" required />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="pubDate">Publication Date</Label>
                            <Input id="pubDate" type="date" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="journal">Journal/Conference</Label>
                            <Input id="journal" placeholder="Journal or conference name" required />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="impact">Impact Factor</Label>
                            <Input id="impact" type="number" step="0.01" placeholder="Journal impact factor" />
                          </div>
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="abstract">Abstract</Label>
                          <Textarea id="abstract" placeholder="Brief summary of the publication" rows={4} required />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="doi">DOI / URL</Label>
                          <Input id="doi" placeholder="Digital Object Identifier or URL" />
                        </div>
                        <div className="flex justify-end">
                          <Button 
                            type="submit" 
                            className="bg-innovation-blue hover:bg-innovation-blue/90"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Submit Research Publication"}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="patents">
                <Card>
                  <CardHeader>
                    <CardTitle>Patent Entry</CardTitle>
                    <CardDescription>
                      Record details about patents filed, published, or granted.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="patentTitle">Patent Title</Label>
                          <Input id="patentTitle" placeholder="Enter the title of the patent" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="inventors">Inventors</Label>
                            <Input id="inventors" placeholder="Comma-separated list of inventors" required />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="patentStatus">Status</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="filed">Filed</SelectItem>
                                <SelectItem value="published">Published</SelectItem>
                                <SelectItem value="granted">Granted</SelectItem>
                                <SelectItem value="licensed">Licensed</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="filingDate">Filing Date</Label>
                            <Input id="filingDate" type="date" />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="grantDate">Grant Date (if applicable)</Label>
                            <Input id="grantDate" type="date" />
                          </div>
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="patentAbstract">Abstract</Label>
                          <Textarea id="patentAbstract" placeholder="Brief description of the patent" rows={4} required />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="patentNumber">Patent Number (if assigned)</Label>
                          <Input id="patentNumber" placeholder="Patent application or grant number" />
                        </div>
                        <div className="flex justify-end">
                          <Button 
                            type="submit" 
                            className="bg-innovation-purple hover:bg-innovation-purple/90"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Submit Patent"}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="awards">
                <Card>
                  <CardHeader>
                    <CardTitle>Award Entry</CardTitle>
                    <CardDescription>
                      Document awards, recognitions, and honors received.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="awardTitle">Award Title</Label>
                          <Input id="awardTitle" placeholder="Name of the award" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="recipient">Recipient</Label>
                            <Input id="recipient" placeholder="Individual or team who received the award" required />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="awardDate">Date Received</Label>
                            <Input id="awardDate" type="date" required />
                          </div>
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="awardingBody">Awarding Organization</Label>
                          <Input id="awardingBody" placeholder="Organization that presented the award" required />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="awardDescription">Description</Label>
                          <Textarea id="awardDescription" placeholder="Details about the award and its significance" rows={4} required />
                        </div>
                        <div className="flex justify-end">
                          <Button 
                            type="submit" 
                            className="bg-innovation-teal hover:bg-innovation-teal/90"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Submit Award"}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="others">
                <Card>
                  <CardHeader>
                    <CardTitle>Other Innovation Entry</CardTitle>
                    <CardDescription>
                      Record other types of innovation activities, such as startups, products, or community projects.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="entryType">Entry Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="startup">Startup / Spinoff</SelectItem>
                              <SelectItem value="product">Product Development</SelectItem>
                              <SelectItem value="software">Software / App</SelectItem>
                              <SelectItem value="community">Community Project</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="innovationTitle">Title</Label>
                          <Input id="innovationTitle" placeholder="Name of the innovation" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="contributors">Contributors</Label>
                            <Input id="contributors" placeholder="People involved in this innovation" required />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="innovationDate">Date</Label>
                            <Input id="innovationDate" type="date" required />
                          </div>
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="innovationDescription">Description</Label>
                          <Textarea id="innovationDescription" placeholder="Detailed description of the innovation" rows={4} required />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="impact">Impact & Outcomes</Label>
                          <Textarea id="impact" placeholder="Describe the real-world impact and outcomes" rows={3} />
                        </div>
                        <div className="flex justify-end">
                          <Button 
                            type="submit" 
                            className="bg-innovation-lightBlue hover:bg-innovation-lightBlue/90"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Submit Innovation"}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DataEntry;
